import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.section<{ device: Devices }>`

@media ${ props => props.device.mobileL } {
    height: 100vh;
  }
  
  & h1 {
    color: ${ props => props.theme.colors.letters};
    text-align: center;
  }

  & div.cards-container {
    margin-top: 5rem;
    display: grid;
    gap: 1rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1rem));
  }
`