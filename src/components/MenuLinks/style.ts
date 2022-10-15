import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.ul<{ device: Devices }>`
  & {
    list-style: none;
    height: 80%;
    padding: 0;
  }

  & a {
    text-decoration: none;
    font-size: 2rem;
    color: #fff;
  }

  & li {
    margin-top: 3rem;
    display: flex;
    align-items: center;
  }

  @media ${props => props.device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 12rem;
  }

  & li {
    margin-top: 0;
  }

  & a {
    font-size: 0.8rem;
    color: ${ props => props.theme.colors.gray}
  }

`