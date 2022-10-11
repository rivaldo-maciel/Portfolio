import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string,
      letters: string,
      green: string,
      gray: string
    };
  }
}