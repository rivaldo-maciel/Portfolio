import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.aside<{ device: Devices }>`
  display: none;
  background: #0F0F0F;
  position: relative;
  display: none;
  justify-content: center;
  width: 10rem;

  @media ${ props => props.device.laptop } {
    display: flex;
  }

  & .menu-links-container {
    position: fixed;
    height: 12rem;
    top: 29vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & .social-media-links {
    display: flex;
    justify-content: space-evenly;
  }
`