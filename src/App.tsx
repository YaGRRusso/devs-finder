import { useEffect, useState } from 'react'
import { ReposType, UserType } from './types/types'
import api from './api/api'

import * as C from './App.styles'
import { darkTheme, GlobalStyles, lightTheme } from './theme/theme';
import { ThemeProvider } from 'styled-components';
import GithubImg from './svgs/github.svg'

import UserDisplay from './components/UserDisplay';
import { ThemeSwitcher } from './components/ThemeSwticher';

let searchTimer = 0;
const getLocalStorageTheme = localStorage.getItem('theme')
let localStorageTheme: boolean = true
if (getLocalStorageTheme === 'light') {
  localStorageTheme = false
}
export default function App() {
  const [loading, setLoading] = useState(true)
  const [currentSearch, setCurrentSearch] = useState('YaGRRusso')
  const [currentUser, setCurrentUser] = useState<{ user: UserType, repos: ReposType[] }>()
  const [darkMode, setDarkMode] = useState(localStorageTheme)

  const setLocalStorageTheme = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.setItem('theme', 'dark')
    }
  }

  const getUserInfo = async () => {
    setLoading(true)
    const userInfo = await api.getUser(currentSearch)
    const reposInfo = await api.getRepos(currentSearch)
    setCurrentUser({
      user: userInfo,
      repos: reposInfo
    })
    setLoading(false)
  }

  useEffect(() => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => {
      getUserInfo()
    }, 1500)
  }, [currentSearch])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <C.Container>
        <C.Header>
          <img src={GithubImg} alt="github logo" />
          <div>
            <h1>Devs Search</h1>
            <ThemeSwitcher darkTheme={darkMode} onClick={setLocalStorageTheme} />
          </div>
        </C.Header>
        <input type="text" value={currentSearch} onChange={ev => setCurrentSearch(ev.target.value)} />

        {loading &&
          <C.Loading />
        }

        {!loading && currentUser?.user.html_url &&
          <UserDisplay data={currentUser} />
        }

        {!loading && !currentUser?.user.html_url &&
          <div>Não Encontrado :(</div>
        }

      </C.Container>
    </ThemeProvider>
  )
}