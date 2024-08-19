import React from 'react'
import styled from 'styled-components'

const Container = ({ children }) => {
  return (
    <StyledContainer>
      <ContainerBody>{children}</ContainerBody>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  background-color: rgba(75, 135, 125, 1);
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin: 0 1rem;
    height: auto;
  }
`

const ContainerBody = styled.div`
  padding: 1rem;
  background: none;
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`

export default Container
