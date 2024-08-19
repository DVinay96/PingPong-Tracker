import React from 'react'
import styled from 'styled-components'

const Button = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  width: ${(props) => props.width || '30%'};
  padding: 3%;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  font-size: 0.9375rem;
  border-radius: 5px;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: rgba(75, 135, 125, 1);
  }
`

export default Button
