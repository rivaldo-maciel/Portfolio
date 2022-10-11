import styled from 'styled-components';

export const Container = styled.section<{ isActive: boolean |  undefined }>`
  height: 100vh;
  width: 100%;
  position: absolute;
  display: flex;
  visibility: hidden;
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

  ${
    (props) => {
      if (props.isActive) {
        return ({
          visibility: "visible"
        })
      }
    }
  }
`