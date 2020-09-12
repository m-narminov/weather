import React from 'react'
import styled from 'styled-components'

import City from './Container/City'

const StyledContainer = styled.div`
  margin-top: -50px;
  position: relative;
  background: #fff;
  border: 1px solid green;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`

const Container = () => {
  
  return <StyledContainer><City /></StyledContainer>
}

export default Container
