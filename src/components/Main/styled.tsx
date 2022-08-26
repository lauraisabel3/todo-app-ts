import styled from "@emotion/styled";
import iconDelete  from '../../images/icon-cross.svg'

type Props = {
  check: boolean;
}

const Container = styled.div `
  width: 100%;
  height: auto;
  margin-top: -120px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme ? 'hsl(235, 24%, 19%)' : 'var(--grey)'};
`

const SearcherContainer = styled.div `
  width: 100%;
  max-width: 600px;
  height: 60px;
  position: relative;
`

const Searcher = styled.input `
  width: 100%;
  height: 100%;
  padding: 0 50px;
  font-family: inherit;
  font-size: 1.6rem;
  border-radius: 8px;
  border: none;
  background: ${props => props.theme ? 'var(--very-dark-blue)' : 'var(--light-grey)'};
  color: ${props => props.theme ? 'var(--grey)' : 'dark'};

  :focus {
    outline: 2px solid hsl(280, 87%, 65%);
  }
`

const Marker = styled.div<Props>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  border: 1px solid var(--grey);
  background: ${props => props.check ? 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' : props.theme ? 'var(--dark-blue)' : 'white'}};
  cursor: pointer;
`

const ContainerTodos = styled.div `
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 20px auto;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${props => props.theme ? 'var(--very-dark-blue)' : 'var(--light-grey)'}
`

const IconDelete = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  background-image: url(${iconDelete});
  background-size: cover;
  backgrond-position: center;
  cursor: pointer;
`


export { Container, SearcherContainer, Searcher, Marker, ContainerTodos, IconDelete }