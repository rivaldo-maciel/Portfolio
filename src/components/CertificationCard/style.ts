import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  & img:hover {
    transform: scale(1.1);
    z-index: 1;
  }


  & img {
    width: 20rem;
    position: relative;
  }

  & h3 {
    font-size: 1rem;
    color: ${ props => props.theme.colors.yellow};
    text-align: center;
  }

  & svg {
    margin-top: 0.5rem;
    color: ${ props => props.theme.colors.yellow};
  }
`