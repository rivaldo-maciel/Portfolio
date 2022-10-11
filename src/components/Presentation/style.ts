import styled from 'styled-components';

export const Container = styled.section`
  color: ${ props => props.theme.colors.letters};
  padding: 1.5rem;
  margin-top: 4rem;

  & h1, h2, h3 {
    margin: 0;
  }
  
  & h1 {
    font-size: 10vh;
    margin: 0;
    color: ${ props => props.theme.colors.bg};
    -webkit-text-stroke: .04rem #5b5b5b;
    position: relative;
  }

  & h1:before {
    content: attr(data-text);
    color: ${ props => props.theme.colors.green};
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    -webkit-text-stroke: 0rem #5b5b5b;
    overflow: hidden;
    animation: animate 4s linear forwards;
    animation-delay: 1s;
  }

  @keyframes animate {
    0%,10% {
      width: 0;
    }
    70%,100% {
      width: 80%;
    }
  }

  & h3 {
    animation: animate2 2s linear forwards;
  }

  & h2 {
    visibility: hidden;
    animation: animate2 4s linear forwards;
    animation-delay: 1.2s;
    color: ${ props => props.theme.colors.gray};
  }

  @keyframes animate2 {
    0% {
      transform: translatex(80vh);
    } 100% {
      visibility: visible;
      transform: translatex(0);
    }
  }
`