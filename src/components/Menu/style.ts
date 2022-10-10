import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background-color: transparent;
  height: 2.2rem;
  width: 2.2rem;
  margin-right: 1rem;
  position: relative;

  & div {
    height: .3rem;
    width: 100%;
    background-color: #fff;
    position: absolute;
  }

  & div:nth-child(1) {
    top: 0;
    transition: .6s ease-in-out
  }

  & div:nth-child(2) {
    top: 1rem; 
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
  }

  &.active div:nth-child(3) {
    bottom: 50%;
    transform: rotate(-45deg);
  }
`