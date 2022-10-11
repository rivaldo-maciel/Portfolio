import styled from 'styled-components';

export const Container = styled.nav<{ isVisible: boolean}>`
  position: fixed;
  bottom: 0;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 3rem;
  width: 80%;
  background: ${ props => props.theme.colors.green};
  align-self: center;
  visibility: ${ props => props.isVisible ? "visible" : "hidden"}
`