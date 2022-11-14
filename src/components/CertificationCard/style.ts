import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.div<{ device: Devices }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 100%;
  }

  @media ${ props => props.device.desktop } {
    & img {
    width: 40rem;
  }
  }
`