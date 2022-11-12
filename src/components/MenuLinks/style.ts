import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.ul<{ device: Devices }>`

@media ${props => props.device.laptop } {
    align-items: center;
    height: 12rem;

    & a {
      font-size: 0.8rem;
      color: ${ props => props.theme.colors.gray}
    }
  }

@media (max-width: 500px) {
  & a {
    color: #fff;
    font-size: 2rem;
  }
}

@media ${ props => props.device.desktop } {
  & a {
    font-size: 0.8rem;
  }
}

& a {
    text-decoration: none;
  }

  & {
    list-style: none;
    height: 80%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }


  & a:hover {
    color: #fff;
  }

  & li {
    margin-top: 3rem;
    display: flex;
    align-items: center;
  }

  & li {
    margin-top: 0;
  }
`