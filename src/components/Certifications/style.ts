import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.section<{ device: Devices }>`
  margin-bottom: 4rem;

  & h1 {
    color: ${(props) => props.theme.colors.letters};
    text-align: center;
  }

  @media ${ props => props.device.mobileL } {
    height: 100vh;
  }

  .certifications-container {
    display: grid;
    justify-content: center;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1rem));
    width: 100%;
  }
`;
