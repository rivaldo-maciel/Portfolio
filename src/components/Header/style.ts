import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.header<{ device: Devices }>`
  background-color: transparent;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  z-index: 2;

  @media ${ props => props.device.desktop } {
    display: none;
  }
`