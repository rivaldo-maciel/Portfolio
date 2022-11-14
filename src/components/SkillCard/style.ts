import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.div<{ device: Devices }>`
  height: 6rem;
  width: 6rem;
  background: ${ props => props.theme.colors.gray2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s;
  cursor: pointer;

  & svg {
    color: ${ props => props.theme.colors.yellow};
    filter: drop-shadow(0 0 0.35rem ${ props => props.theme.colors.yellow});
  }

  .hidden {
    display: none;
  }

  & h2 {
    font-size: 1rem;
    margin: 0;
    margin-top: 1rem;
    padding: 0;
    color: ${ props => props.theme.colors.yellow };
  }

  @media ${ props => props.device.desktop } {
    & svg {
      filter: none;
    }

    &:hover {
    svg {
      filter: drop-shadow(0 0 0.35rem ${ props => props.theme.colors.yellow});
    }
  }
  }
`