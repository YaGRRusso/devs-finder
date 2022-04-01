import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
    color: '#121212',
    primaryColor: '#0D74E7',
    secondaryColor: '#2FBB4F',
    backgroundColor: '#f2f2f2'
};

export const darkTheme: DefaultTheme = {
    color: '#f2f2f2',
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