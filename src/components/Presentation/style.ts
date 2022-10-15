import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.section<{ device: Devices }>`
  color: ${ props => props.theme.colors.letters};
  padding: 1.5rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;

  @media ${ props => props.device.tablet } {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 25rem;
  }

  @media ${ props => props.device.laptop } {
    margin-top: 0;
    height: 84vh;
  }

  & h1, h2, h3 {
    margin: 0;
  }
  
  & h1 {
    font-size: 4.5rem;
    color: transparent;
    -webkit-text-stroke: .04rem #5b5b5b;
    position: relative;
    left: -0.2rem;
  }

  & h1:before {
    content: attr(data-text);
    color: ${ props => props.theme.colors.yellow};
    position: absolute;
    width: 0%;
    height: 100%;
    -webkit-text-stroke: 0rem #5b5b5b;
    overflow: hidden;
    animation: animate 4s linear forwards;
    animation-delay: 1s;
  }

  @keyframes animate {
    0%,10% {
      width: 0;
    }
    70%,100% {
      width: 100%;
    }
  }

  & h3 {
    animation: animate2 2s linear forwards;
  }

  & h2 {
    visibility: hidden;
    animation: animate2 4s linear forwards;
    animation-delay: 1.2s;
    color: ${ props => props.theme.colors.gray};
  }

  @keyframes animate2 {
    0% {
      transform: translatex(80vh);
    } 100% {
      visibility: visible;
      transform: translatex(0);
    }
  }

  & button {
    border: none;
    background: ${ props => props.theme.colors.yellow };
    font-weight: bold;
    height: 2rem;
    width: 8rem;
    margin-top: .6rem;
    border-radius: 4px;
    cursor: pointer;
  }

  & .name-container {
    width: 60rem;
  }
`