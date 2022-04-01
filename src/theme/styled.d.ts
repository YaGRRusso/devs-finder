import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: string,
        primaryColor: string,
        secondaryColor: string,
        backgroundColor: string,
    }
}