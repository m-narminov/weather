import React from 'react'
import logo from './logo.svg'
import './App.css'
import dayImg from './day.png'

import styled from 'styled-components'
import Container from './components'

const Background = styled.img`
  height: auto;
  width: 100%;
  max-width: 720px;
`

const DayCard = styled.div`
  border-radius: 6px;
  box-shadow: 12px 12px;
`

function App() {
  return (
    <div className="App">
      <Background src={dayImg} />
      <Container />
    </div>
  )
}

export default App
