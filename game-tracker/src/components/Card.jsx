import React from 'react'
import styled from 'styled-components'

const Card = ({ children }) => {
  return (
    <CardStyled>
      <CardBody>{children}</CardBody>
    </CardStyled>
  )
}

export default Card

const CardStyled = styled.div`
  background-color: white;
  border-radius: 5px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: none;
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`
