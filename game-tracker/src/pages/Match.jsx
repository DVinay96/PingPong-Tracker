import React, { useState } from 'react'
import Card from '../components/Card'
import styled from 'styled-components'
import Button from '../components/Button'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Match = () => {
  const player1 = JSON.parse(localStorage.getItem('player1'))
  const player2 = JSON.parse(localStorage.getItem('player2'))

  const [win1, setwin1] = useState(0)
  const [win2, setwin2] = useState(0)

  const handleClick1 = () => {
    setwin1(win1 + 1)
  }

  const handleClick2 = () => {
    setwin2(win2 + 1)
  }

  const handleReset = () => {
    setwin1(0)
    setwin2(0)
  }

  const handleWinner = () => {
    if (win1 === win2) {
      return 'Draw'
    } else if (win1 > win2) {
      return player1
    } else {
      return player2
    }
  }

  const winner = handleWinner(win1, win2, player1, player2)

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(process.env.REACT_APP_URI)

    axios
      .post(`${process.env.REACT_APP_URI}`, {
        player1,
        player2,
        winner,
      })
      .then((response) => {
        console.log('Match added:', response.data)
        // Optionally clear the form or handle success
      })
      .catch((error) => {
        console.error('Error adding match:', error)
        // Handle error
      })
  }

  return (
    <MatchStyled>
      <Card>
        <ImageContainer>
          <NavLink to={'/'}>
            {' '}
            <img src="./images/logo.jpg" alt="" />
          </NavLink>

          <h1>Match Info</h1>
        </ImageContainer>
        <PlayerWrapper>
          <PlayerInfo>
            <PlayerName>{player1}</PlayerName>
            <PlayerWins>WINS: {win1}</PlayerWins>
          </PlayerInfo>
          <PlayerInfo>
            <PlayerName>{player2}</PlayerName>
            <PlayerWins>WINS: {win2}</PlayerWins>
          </PlayerInfo>
        </PlayerWrapper>
        <ButtonWrapper>
          <Button onClick={handleClick1}>I WON</Button>
          <Button onClick={handleClick2}>I WON</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onClick={handleReset}>RESET</Button>
        </ButtonWrapper>
        <Title>Current Winner:</Title>
        <h1>{winner}</h1>
        <ButtonWrapper>
          <Button onClick={handleSubmit} width="30">
            <NavLink to={'/history'}> SAVE GAME</NavLink>
          </Button>
        </ButtonWrapper>
      </Card>
    </MatchStyled>
  )
}

const Title = styled.h1`
  margin-top: 3rem;
`

const PlayerWins = styled.span`
  font-size: 1%.5;
  font-weight: 500;
  margin: 0.5rem;
  display: flex;
  word-wrap: nowrap;
`
const PlayerName = styled.span`
  font-size: 2rem;
  font-weight: 500;
`

const PlayerInfo = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  border: solid;
  padding: 5rem;
`

const MatchStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(75, 135, 125, 1);
`
const PlayerWrapper = styled.div`
  display: flex;
  padding: 0 80% 0 80%;
  margin: 3rem 3rem 1rem 3rem;
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 1rem;
`
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Match
