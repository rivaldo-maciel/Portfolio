import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.section<{ device: Devices }>`
  display: flex;
  flex-direction: column;
  height: 100vh;

  & h1 {
    color: ${(props) => props.theme.colors.letters};
    text-align: center;
    margin-top: 4rem;
  }

  & .certifications-swiper {
    width: 100%;
    height: 20rem;
    margin-top: 2rem;
    z-index: 0;
  }

  & .swiper-button-next, .swiper-button-prev {
    display: none;
  }

  & .swiper-button-next, .swiper-button-prev {
    color: rgb(241, 175, 9);
  }

  & .swiper-pagination-bullet {
    height: 0.4rem;
    width: 2rem;
    border-radius: 10px;
    background-color: rgb(241, 175, 9);
  }

  @media ${ props => props.device.mobileL } {
    height: 100vh;
  }

  @media ${ props => props.device.desktop } {
    & .certifications-swiper {
    width: 50rem;
    height: 32rem;
    margin-top: 2rem;
  }

  & .swiper-button-next, .swiper-button-prev {
    display: block;
  }
  }
`;
