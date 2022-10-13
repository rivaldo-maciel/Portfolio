import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  background-color: ${ props => props.theme.colors.bg};

  & ul {
    list-style: none;
    height: 80%;
  }

  & ul a {
    text-decoration: none;
    font-size: 2rem;
    color: #fff;
  }

  & ul li {
    margin-top: 3rem;
  }
`