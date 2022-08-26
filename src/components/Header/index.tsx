import { useContext} from 'react'
import { Button, Container, Title } from './styled'
import { ThemeContext } from '../../context/ThemeContext'




const Header = ({theme}: {theme: boolean | undefined}) => {
  const context = useContext(ThemeContext)
  const handleTheme = context?.handleTheme

  return(
    <Container>
      <Title>TODO</Title>
      <Button onClick={handleTheme} theme={theme}/>
    </Container>  
  )
}

export default Header