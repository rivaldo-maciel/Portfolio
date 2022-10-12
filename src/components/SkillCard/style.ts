import styled from 'styled-components';

export const Container = styled.div`
  height: 6rem;
  width: 6rem;
  background: ${ props => props.theme.colors.gray2};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;

  & svg {
    color: ${ props => props.theme.colors.green};
    filter: drop-shadow(0 0 0.35rem ${ props => props.theme.colors.green});
  }

  .hidden {
    display: none;
  }

  & h2 {
    font-size: 1.2rem;
    color: ${ props => props.theme.colors.green};
  }
`