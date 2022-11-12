import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.nav<{ device: Devices }>`
  position: fixed;
  bottom: 0;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 3rem;
  width: 80%;
  background: ${ props => props.theme.colors.yellow};
  align-self: center;

  @media ${ props => props.device.tablet } {
    display: none;
  }
`