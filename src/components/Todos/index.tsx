import { useState} from "react";
import { ContainerTodo, Content, IconDelete} from './styled'
import { Marker } from "../Main/styled";



const Todos= ({content, theme, deleteTodo}: {content:string, theme:boolean | undefined, deleteTodo: (content:string) => void}) => {
  const [check, setCheck] = useState(false);
  // const {deleteTodo} = useTodos()

  const handleCheck = () => {
    setCheck(!check)
  }

//  const handleDelete = (content:string) => {
//   deleteTodo(content)
//  }
  

  return(
      <ContainerTodo theme={theme}>
        <Marker onClick={handleCheck} check={check} theme={theme}/>
        <Content theme={theme} check={check}>{content}</Content>
        <IconDelete onClick={() => deleteTodo(content)} theme={theme}/>
      </ContainerTodo>
  )
}

export default Todos