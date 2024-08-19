import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Form from '../components/Form'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <LoginStyled>
      <Card>
        <ImageContainer>
          <NavLink to={'/'}>
            {' '}
            <img src="./images/logo.jpg" alt="" />
          </NavLink>

          <h1>Arvolution PingPong Match</h1>
        </ImageContainer>

        <Form />
      </Card>
    </LoginStyled>
  )
}

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(75, 135, 125, 1);
`
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Login
