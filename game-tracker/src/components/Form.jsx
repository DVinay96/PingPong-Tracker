import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const Form = () => {
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')

  useEffect(() => {
    localStorage.setItem('player1', JSON.stringify(player1))
  }, [player1])

  useEffect(() => {
    localStorage.setItem('player2', JSON.stringify(player2))
  }, [player2])

  return (
    <>
      <StyledForm>
        <label htmlFor="Player1">
          <h1>Player 1</h1>
          <input
            data-testid="input"
            type="text"
            value={player1}
            name="Player1"
            placeholder="Alias"
            onChange={(e) => setPlayer1(e.target.value)}
          />
        </label>
        <label htmlFor="Player2">
          <h1>Player 2</h1>
          <input
            type="text"
            value={player2}
            name="Player2"
            placeholder="Alias"
            onChange={(e) => setPlayer2(e.target.value)}
          />
        </label>
        <NavLink to={'/match'}>
          <Button>
            <h3> LETS PLAY </h3>
          </Button>
        </NavLink>
      </StyledForm>
    </>
  )
}

export default Form

const StyledForm = styled.form`
  width: 40rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 1rem;
    width: 100%;
    word-wrap: nowrap;
    padding: 1rem;
  }
  label {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    margin-bottom: 15px;
    box-sizing: border-box;

    & > input {
      display: block;
      width: 100%;
      height: 40px;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #000000;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 10px;
      box-shadow: 0px 4px 20px rgba(0, 128, 96, 0.15);
      box-sizing: border-box;
      &:focus {
        outline-color: var(--gray);
      }
    }
  }
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > button {
      margin-bottom: 2rem;
    }
  }
`
