import React from 'react'
import styled from 'styled-components'
import { useStore } from 'effector-react'

import City from './City'
import Search from './Search'
import { $searchMode } from '../store'

const StyledContainer = styled.div`
  z-index: 10;
  margin-top: -80px;
  position: relative;
  /* position: fixed; */
  bottom: 0;
  background: #fff;
  /* max-width: 720px; */
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
`

const Container = () => {
  const searchMode = useStore($searchMode)
  return <StyledContainer>{searchMode ? <Search /> : <City />}</StyledContainer>
}

export default Container
