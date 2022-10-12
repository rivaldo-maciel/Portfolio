import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  & h1 {
    color: ${props => props.theme.colors.letters};
    text-align: center;
  }

  & p {
    color: ${props => props.theme.colors.gray};
    text-align: left;
    width: 80%;
    align-self: center;
    margin-top: 3rem;
  }

  & img {
    width: 50%;
    border-radius: 50%;
    align-self: center;
    margin-top: 2rem;
  }
`