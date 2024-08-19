import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import History from './pages/History'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { MemoryRouter } from 'react-router-dom'

const mock = new MockAdapter(axios)

describe('History Component', () => {
  afterEach(() => {
    mock.reset()
  })

  test('renders the History component and fetches data', async () => {
    mock.onGet('http://localhost:5000/').reply(200, [
      { player1: 'Player A', player2: 'Player B', winner: 'Player A' },
      { player1: 'Player C', player2: 'Player D', winner: 'Player C' },
    ])

    render(
      <MemoryRouter>
        <History />
      </MemoryRouter>
    )

    expect(screen.getByText('Match History')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getAllByText('Player A')).toHaveLength(2)
      expect(screen.getAllByText('Player B')).toHaveLength(1)
      expect(screen.getAllByText('Player C')).toHaveLength(2)
    })
  })

  test('handles API error correctly', async () => {
    // Mockea un error en la respuesta de la API
    mock.onGet('http://localhost:5000/').reply(500)

    render(
      <MemoryRouter>
        <History />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.queryByText('Player A')).not.toBeInTheDocument()
      expect(screen.queryByText('Player B')).not.toBeInTheDocument()
      expect(screen.queryByText('Player C')).not.toBeInTheDocument()
    })
  })
})
