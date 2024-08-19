import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Match from './pages/Match'
import History from './pages/History'
import React from 'react'
import GlobalStyle from './styles/globalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/match" element={<Match />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
