import styled from 'styled-components';

export const Container = styled.section`
  height: 12rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`

export const Word = styled.span<{ position: { x: string, y: string }, displayOrder: string}>`
  position: absolute;
  transform: translate(${props => props.position.x}rem, ${props => props.position.y}rem);
  font-size: 1.2rem;
  color: ${ props => props.theme.colors.bg};
  animation: animateWord 1s linear forwards;
  animation-delay: ${ props => props.displayOrder}s;

  @keyframes animateWord {
    0% {
      color: ${ props => props.theme.colors.bg};
    } 100% {
      color: ${ props => props.theme.colors.green};
      text-shadow: ${ props => props.theme.colors.green} 1px 0 10px;
    }
  }
  }
`

export const words = [
  {
    word: "React JS",
    position: {
      x: "-6",
      y: "-6.5"
    },
    displayOrder: "1"
  },
  {
    word: "Javascript",
    position: {
      x: "-2",
      y: "-8"
    },
    displayOrder: "2"
  },
  {
    word: "HTML",
    position: {
      x: "-9",
      y: "-5"
    },
    displayOrder: "3"
  },
  {
    word: "CSS",
    position: {
      x: "-9",
      y: "-3"
    },
    displayOrder: "4"
  },
  {
    word: "Typescript",
    position: {
      x: "-6",
      y: "-1.5"
    },
    displayOrder: "5"
  },
  {
    word: "API Rest",
    position: {
      x: "-1.8",
      y: "0"
    },
    displayOrder: "6"
  },
  {
    word: "Sequelize",
    position: {
      x: "2.4",
      y: "-1.5"
    },
    displayOrder: "7"
  },
  {
    word: "Typeorm",
    position: {
      x: "5",
      y: "-3"
    },
    displayOrder: "8"
  },
  {
    word: "Git",
    position: {
      x: "7",
      y: "-4"
    },
    displayOrder: "9"
  },
  {
    word: "MYSQL",
    position: {
      x: "8",
      y: "-5.5"
    },
    displayOrder: "10"
  },
  {
    word: "Mongodb",
    position: {
      x: "6",
      y: "-7"
    },
    displayOrder: "11"
  },
  {
    word: "Docker",
    position: {
      x: "3",
      y: "-8.5"
    },
    displayOrder: "12"
  },
  {
    word: "Bootstrap",
    position: {
      x: "0.3",
      y: "-6.2"
    },
    displayOrder: "13"
  },
  {
    word: "TailwindCSS",
    position: {
      x: "-3",
      y: "-4.5"
    },
    displayOrder: "14"
  },
  {
    word: "Redux",
    position: {
      x: "3.5",
      y: "-4.5"
    },
    displayOrder: "15"
  },
  {
    word: "Python",
    position: {
      x: "-5",
      y: "-3"
    },
    displayOrder: "16"
  },
  {
    word: "Java",
    position: {
      x: "0",
      y: "-3"
    },
    displayOrder: "17"
  }
]