import styled from 'styled-components';

export const Container = styled.section`
  color: ${ props => props.theme.colors.letters};
  padding: 1.5rem;

  & h1, h2, h3 {
    margin: 0;
  }
  
  & h1 {
    font-size: 3rem;
    margin: 0;
    color: ${ props => props.theme.colors.green}
  }
`