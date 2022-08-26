import styled from "@emotion/styled"; 
import image from '../../images/bg-mobile-light.jpg'
import moon from '../../images/icon-moon.svg'
import sun from '../../images/icon-sun.svg'

const Container = styled.div `
  width: 100%;
  height: 220px;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Title = styled.h1 `
  font-size: 3rem;
  font-weight: 600;
  color: white;
  letter-spacing: 0.8rem;
`
const Button = styled.button `
  width: 28px;
  height: 28px;
  border: none;
  background-color: transparent;
  background-image: ${props => props.theme ? `url(${sun})` : `url(${moon})`};
  background-size: cover;
  background-position: center;
  cursor: pointer;
`


export {Container, Title, Button}