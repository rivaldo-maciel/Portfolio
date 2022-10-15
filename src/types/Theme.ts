import { DetailedHTMLProps, HTMLAttributes, RefObject } from 'react';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string,
      letters: string,
      yellow: string,
      gray: string,
      gray2: string
    };
  }
}