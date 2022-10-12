import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  
  .card-container {
    border-radius: .3rem;
    height: 20rem;
    width: 100%;
    background: ${ props => props.theme.colors.gray2};
    display: flex;
    align-items: flex-end;
  }

  & h3 {
    color: ${ props => props.theme.colors.letters};
    margin: 0;
    margin-bottom: 1.2rem;
    margin-top: 1rem;
  }
`
export const ViewButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0 0 .3rem .3rem;
  height: 3rem;
  width: 100%;
  background: ${ props => props.theme.colors.green};
`