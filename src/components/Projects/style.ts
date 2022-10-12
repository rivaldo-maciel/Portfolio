import styled from 'styled-components';

export const Container = styled.section`
  & h1 {
    color: ${ props => props.theme.colors.letters};
    text-align: center;
  }

  & div.cards-container {
    display: grid;
    gap: 1rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1rem));
  }
`