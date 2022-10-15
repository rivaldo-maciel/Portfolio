import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.ul<{ device: Devices }>`
  & {
    list-style: none;
    height: 80%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  & a {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
  }

  & li {
    margin-top: 3rem;
    display: flex;
    align-items: center;
  }

  @media ${props => props.device.laptop } {
    align-items: center;
    height: 12rem;

    & a {
      font-size: 0.8rem;
      color: ${ props => props.theme.colors.gray}
    }
  }

  & li {
    margin-top: 0;
  }
`