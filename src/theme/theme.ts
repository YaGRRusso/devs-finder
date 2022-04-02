import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
    active: 'light',
    color: '#121212dd',
    subColor: '#12121299',
    superColor: '#121212',
    primaryColor: '#0D74E7',
    secondaryColor: '#2FBB4F',
    backgroundColor: '#f2f2f2'
};

export const darkTheme: DefaultTheme = {
    active: 'dark',
    color: '#f2f2f2dd',
    subColor: '#f2f2f299',
    superColor: '#f2f2f2',
    primaryColor: '#0D74E7',
    secondaryColor: '#2FBB4F',
    backgroundColor: '#121212'
};

export const GlobalStyles = createGlobalStyle`
    body{
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.backgroundColor};
    }

    @media (max-width: 425px) {
        html {
            font-size: 12px;
        }
    }
`