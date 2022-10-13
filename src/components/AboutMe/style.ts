import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 9.5rem;

  & h1 {
    color: ${props => props.theme.colors.letters};
    text-align: center;
  }

  & p {
    color: ${props => props.theme.colors.gray};
    text-align: left;
    width: 80%;
    align-self: center;
    margin-top: 4rem;
    font-size: 1.4rem;
  }

  .img-content {
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 2rem;
  }

  & img {
    width: 50%;
    border-radius: 50%;
    margin-top: 2rem;
  }

  & svg {
    width: 22rem;
    position: absolute;
    z-index: -1;
    top: -2.4rem;
    right: 2rem;
  }
`