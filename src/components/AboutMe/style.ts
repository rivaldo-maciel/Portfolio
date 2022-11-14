import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.section<{ device: Devices }>`
  width: 40rem;
  display: flex;
  flex-direction: column;
  margin-top: 9.5rem;
  align-self: center;
  width: 90%;

  @media ${ props => props.device.laptop } {
    width: 45rem;
  
    & p {
      color: ${props => props.theme.colors.gray};
      align-self: center;
      margin-top: 4rem;
      font-size: 1.4rem;
      text-align: center;
    }
  }

  @media ${ props => props.device.mobileL } {
    height: 100vh;
  }

  & h1 {
    color: ${ props => props.theme.colors.letters };
    text-align: center;
    margin-top: 4rem;
  }

  & p {
    color: ${props => props.theme.colors.gray};
    align-self: center;
    margin-top: 4rem;
    font-size: 1.4rem;
    text-align: center;
  }

  .img-content {
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 2rem;
  }

  & img {
    width: 12rem;
    border-radius: 50%;
    margin-top: 2rem;
  }

  & svg {
    width: 22rem;
    position: absolute;
    z-index: -1;
    right: 2rem;
  }
`