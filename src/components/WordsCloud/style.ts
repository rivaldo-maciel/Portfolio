import styled from 'styled-components';
import { Devices } from '../../types/Devices';

export const Container = styled.section<{ device: Devices }>`
  align-self: center;
  height: 12rem;
  width: 25rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  animation animateCloud 4s linear forwards;
  transform: scale(0);
  animation-delay: 5s;

  @media ${ props => props.device.laptop } {
    margin-right: 10rem;
    align-self: auto;
  }

  @keyframes animateCloud {
    0% {
      transform: scale(0);
    } 50% {
      transform: scale(1.1);
    } 100% {
      transform: scale(1);
    }
  }
`

export const Word = styled.span<{ position: { x: string, y: string }, displayOrder: string, size: string, dark: boolean}>`
  position: absolute;
  top: ${props => props.position.y}rem;
  right: ${props => props.position.x}rem;
  font-size: ${props => props.size}rem;
  font-weight: bold;
  transform: scale(1.8);
  color: ${ props => props.dark ? '#9e7414' : props.theme.colors.yellow};
  animation-delay: ${ props => Number(props.displayOrder) + 4}s;

  @keyframes animateWord {
    0% {
      color: ${ props => props.theme.colors.bg};
    } 100% {
      color: ${ props => props.dark ? '#c18c07' : props.theme.colors.yellow};
    }
  }
  }

`

export const words = [
  {
    word: "Typescript",
    position: {
      x: '12',
      y: '0'
    },
    displayOrder: "5",
    size: "1",
    dark: false,
  },
  {
    word: "Docker",
    position: {
      x: '19',
      y: '1.5'
    },
    displayOrder: "12",
    size: "0.75",
    dark: false,
  },
  {
    word: "MongoDB",
    position: {
      x: '5',
      y: '0.2'
    },
    displayOrder: "7",
    size: "0.75",
    dark: true,
  },
  {
    word: "Sequelize",
    position: {
      x: '18',
      y: '3'
    },
    displayOrder: "8",
    size: "0.875",
    dark: true,
  },
  {
    word: "Git",
    position: {
      x: '3',
      y: '4'
    },
    displayOrder: "14",
    size: "1",
    dark: true,
  },
  {
    word: "Javascript",
    position: {
      x: '8.5',
      y: '1.6'
    },
    displayOrder: "3",
    size: "1.25",
    dark: false,
  },
  {
    word: "Redux",
    position: {
      x: '2.5',
      y: '2'
    },
    displayOrder: "16",
    size: "0.875",
    dark: false,
  },
  {
    word: "Express",
    position: {
      x: '18',
      y: '4.5'
    },
    displayOrder: "18",
    size: "1",
    dark: false,
  },
  {
    word: "HTML",
    position: {
      x: '11.4',
      y: '4'
    },
    displayOrder: "1",
    size: "1.25",
    dark: false,
  },
  {
    word: "CSS",
    position: {
      x: '6.5',
      y: '4'
    },
    displayOrder: "2",
    size: "1.25",
    dark: false,
  },
  {
    word: "Jest",
    position: {
      x: '3.2',
      y: '5.8'
    },
    displayOrder: "13",
    size: "0.875",
    dark: false,
  },
  {
    word: "Tailwind",
    position: {
      x: '17',
      y: '6.5'
    },
    displayOrder: "11",
    size: "1",
    dark: true,
  },
  {
    word: "React Js",
    position: {
      x: '8.3',
      y: '6'
    },
    displayOrder: "4",
    size: "1.25",
    dark: false,
  },
  {
    word: "Java",
    position: {
      x: '3.5',
      y: '7.3'
    },
    displayOrder: "9",
    size: "0.875",
    dark: true,
  },
  {
    word: "MySQL",
    position: {
      x: '14.5',
      y: '8.5'
    },
    displayOrder: "6",
    size: "1",
    dark: false,
  },
  {
    word: "Node Js",
    position: {
      x: '7.2',
      y: '8.5'
    },
    displayOrder: "10",
    size: "1",
    dark: false,
  },
  {
    word: "Python",
    position: {
      x: '11',
      y: '10.5'
    },
    displayOrder: "15",
    size: "0.75",
    dark: true,
  },
]