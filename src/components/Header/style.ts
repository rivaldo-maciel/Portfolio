import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${ props => props.theme.colors.bg };
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  z-index: 2
`