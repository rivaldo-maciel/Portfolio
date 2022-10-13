import styled from 'styled-components';

export const Container = styled.section`
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 5.5rem;
  position: relative;
`

export const Word = styled.span<{ position: { x: string, y: string }, displayOrder: string}>`
  position: absolute;
  top: ${props => props.position.y}rem;
  right: ${props => props.position.x}rem;
  font-size: 1.2rem;
  color: ${ props => props.theme.colors.bg};
  animation: animateWord 4s linear forwards;
  animation-delay: ${ props => Number(props.displayOrder) + 4}s;

  @keyframes animateWord {
    0% {
      color: ${ props => props.theme.colors.bg};
    } 100% {
      color: ${ props => props.theme.colors.green};
      text-shadow: 1px 1px 2px ${ props => props.theme.colors.green};
    }
  }
  }

`

export const words = [
  {
    word: "Sequelize",
    position: {
      x: '17',
      y: '0.2'
    },
    displayOrder: "14"
  },
  {
    word: "Javascript",
    position: {
      x: '15',
      y: '-1.5'
    },
    displayOrder: "15"
  },
  {
    word: "HTML",
    position: {
      x: '14',
      y: '-3'
    },
    displayOrder: "16"
  },
  {
    word: "CSS",
    position: {
      x: '14',
      y: '0.2'
    },
    displayOrder: "3"
  },
  {
    word: "Typescript",
    position: {
      x: '8',
      y: '-4'
    },
    displayOrder: "17"
  },
  {
    word: "API Rest",
    position: {
      x: '8.7',
      y: '-2'
    },
    displayOrder: "4"
  },
  {
    word: "React JS",
    position: {
      x: '8',
      y: '0'
    },
    displayOrder: "1"
  },
  {
    word: "Typeorm",
    position: {
      x: '3.5',
      y: '-2.5'
    },
    displayOrder: "18"
  },
  {
    word: "Git",
    position: {
      x: '8.5',
      y: '4.8'
    },
    displayOrder: "9"
  },
  {
    word: "MYSQL",
    position: {
      x: '10',
      y: '3.5'
    },
    displayOrder: "10"
  },
  {
    word: "Node JS",
    position: {
      x: '10.5',
      y: '5'
    },
    displayOrder: "11"
  },
  {
    word: "Docker",
    position: {
      x: '5.8',
      y: '3.5'
    },
    displayOrder: "8"
  },
  {
    word: "Bootstrap",
    position: {
      x: '2',
      y: '-1'
    },
    displayOrder: "5"
  },
  {
    word: "TailwindCSS",
    position: {
      x: '14',
      y: '2'
    },
    displayOrder: "13"
  },
  {
    word: "Redux",
    position: {
      x: '10',
      y: '1.8'
    },
    displayOrder: "2"
  },
  {
    word: "Python",
    position: {
      x: '3.5',
      y: '0.5'
    },
    displayOrder: "6"
  },
  {
    word: "Mongodb",
    position: {
      x: '4',
      y: '2'
    },
    displayOrder: "7"
  },
  {
    word: "Java",
    position: {
      x: '15',
      y: '3.5'
    },
    displayOrder: "12"
  }
]