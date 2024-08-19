import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const History = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URI}`)
      .then((response) => {
        setMatches(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <HistoryStyled>
      <Card>
        <>
          <ImageContainer>
            <NavLink to={'/'}>
              {' '}
              <img src="./images/logo.jpg" alt="" />
            </NavLink>

            <h1>Match History</h1>
          </ImageContainer>
          <StyledTable>
            <thead>
              <tr>
                <StyledTh>Player 1</StyledTh>
                <StyledTh>Player 2</StyledTh>
                <StyledTh>Winner</StyledTh>
              </tr>
            </thead>
            <tbody>
              {matches.map((matches, index) => (
                <StyledTr key={index}>
                  <StyledTd>{matches.player1}</StyledTd>
                  <StyledTd>{matches.player2}</StyledTd>
                  <StyledTd>{matches.winner}</StyledTd>
                </StyledTr>
              ))}
            </tbody>
          </StyledTable>
        </>
      </Card>
    </HistoryStyled>
  )
}

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(75, 135, 125, 1);
  height: 100vh;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const StyledTh = styled.th`
  color: #000000;
  padding: 12px 15px;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const StyledTd = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
`

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f3f3f3;
  }

  &:hover {
    background-color: #e9ecef;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`

export default History
