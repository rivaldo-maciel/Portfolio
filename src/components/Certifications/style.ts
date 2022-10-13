import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 2rem;
  margin-bottom: 4rem;

  & h1 {
    color: ${(props) => props.theme.colors.letters};
    text-align: center;
  }

  .certifications-container {
    display: grid;
    justify-content: center;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1rem));
    width: 100%;
  }
`;

export const certifications = [
  {
    src: 'https://templates.images.credential.net/16167799232567736053594400503409.png',
    title: 'Fundamentos do Desenvolvimento Web',
    link: 'https://www.credential.net/cbaa2086-8830-4c43-9542-221effec9e9d'
  },
  {
    src: 'https://templates.images.credential.net/16167799766698607419507843420486.png',
    title: 'Desenvolvimento Front End',
    link: 'https://www.credential.net/96658247-82ac-4547-9fda-cd00718682eb#gs.ffyu95'
  },
  {
    src: 'https://templates.images.credential.net/16541156743145187447521487297258.png',
    title: 'Desenvolvimento Back End',
    link: 'https://www.credential.net/db5f2108-d7e6-4b2a-bdc6-20d2c3c25b44'
  },
  {
    src: 'https://templates.images.credential.net/16167801875981729565689616362202.png',
    title: 'Ciências Da Computação',
    link: 'https://www.credential.net/e873f073-7a30-45c1-80a2-48a047cc1bfe'
  }
];
