import styled from "@emotion/styled";
import iconDelete  from '../../images/icon-cross.svg'

// type PropsClose = {
//   close: boolean;
// }

type PropsCheck = {
  check: boolean;
}

const ContainerTodo = styled.div `
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  background: ${props => props.theme ? 'var(--very-dark-blue)' : 'var(--light-grey)'};
  border-bottom: ${props => props.theme ? '1.5px solid hsl(234, 11%, 52%)' : '1.5px solid var(--grey)'};
`

const Content = styled.span<PropsCheck> `
  font-size: 1.6rem;
  margin-left: 50px;
  text-decoration: ${props => props.check ? 'line-through 1.4px var(--grey)' : 'none'};
  color: ${props => props.theme  ? 'var(--grey)'  : props.check ? 'var(--grey)' :'black'}
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
export {ContainerTodo, Content, IconDelete}
