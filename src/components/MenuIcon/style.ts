import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.button<{ device: Devices }>`
  border: none;
  background-color: transparent;
  height: 1.8rem;
  width: 1.8rem;
  margin-right: 1rem;
  position: relative;

  @media ${ props => props.device.tablet } {
    display: none;
  }

  & div {
    height: .2rem;
    width: 100%;
    background-color: #fff;
    position: absolute;
  }

  & div:nth-child(1) {
    top: 0;
    transition: .6s ease-in-out
  }

  & div:nth-child(2) {
    top: 0.8rem; 
    transition: .35s ease-in-out
  }

  & div:nth-child(3) {
    bottom: 0;
    transition: .6s ease-in-out;
  }

  &.active div:nth-child(2) {
    transform: scaleX(0);
  }

  &.active div:nth-child(1) {
    top: 40%;
    transform: rotate(45deg);
    background: ${ props => props.theme.colors.yellow};
  }

  &.active div:nth-child(3) {
    bottom: 50%;
    transform: rotate(-45deg);
    background: ${ props => props.theme.colors.yellow};
  }
`