import { ThemeContext } from './context/ThemeContext';
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

const Container = styled.div `
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme ? 'hsl(235, 24%, 19%)' : 'var(--grey)' };
`

function App() {
  const context = useContext(ThemeContext)
  const theme = context?.theme
  return (
    <Container theme={theme}>
      <Header theme={theme} />
      <Main theme={theme}/>
    </Container>
  );
}

export default App;
