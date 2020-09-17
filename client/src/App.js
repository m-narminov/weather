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
`

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
