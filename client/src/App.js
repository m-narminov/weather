import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStore } from 'effector-react'

import { $currentCity, appInit } from './store'
import './App.css'
import dayImg from './day.png'
import Container from './components'

const Background = styled.img`
  height: auto;
  width: 100%;
  max-width: 720px;
`

// const DayCard = styled.div`
//   border-radius: 6px;
//   box-shadow: 12px 12px;
// `

function App() {
  const currentCity = useStore($currentCity)
  useEffect(() => {
    appInit()
    return () => {
      localStorage.setItem('currentCity', currentCity)
    }
  }, [currentCity])
  return (
    <div className="App">
      <Background src={dayImg} />
      <Container />
    </div>
  )
}

export default App
