import React from 'react'
import styled from 'styled-components'

import City from './City'

const StyledContainer = styled.div`
  z-index: 10;
  margin-top: -80px;
  position: relative;
  background: #fff;
  border: 1px solid green;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`

const Container = () => {
  return (
    <StyledContainer>
      <City />
    </StyledContainer>
  )
}

export default Container
