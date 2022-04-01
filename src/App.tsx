import { useEffect, useState } from 'react'
import { ReposType, UserType } from './types/types'
import api from './api/api'

import * as C from './App.styles'
import { darkTheme, GlobalStyles } from './theme/theme';
import { ThemeProvider } from 'styled-components';
import GithubImg from './svgs/github.svg'

import UserDisplay from './components/UserDisplay';

let searchTimer = 0;
export default function App() {
  const [loading, setLoading] = useState(false)
  const [currentSearch, setCurrentSearch] = useState('YaGRRusso')
  const [currentUser, setCurrentUser] = useState<{ user: UserType, repos: ReposType[] }>()

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
    }, 1000)
  }, [currentSearch])

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <C.Container>
        <h1><img src={GithubImg} alt="github logo" />Devs Search</h1>
        <input type="text" value={currentSearch} onChange={ev => setCurrentSearch(ev.target.value)} />
        {loading &&
          <C.Loading />
        }
        {!loading && currentUser &&
          <UserDisplay data={currentUser} />
        }
      </C.Container>
    </ThemeProvider>
  )
}