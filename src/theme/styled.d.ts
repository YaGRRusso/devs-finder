import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        active: 'dark' | 'light';
        color: string,
        subColor: string,
        superColor: string,
        primaryColor: string,
        secondaryColor: string,
        backgroundColor: string,
    }
}