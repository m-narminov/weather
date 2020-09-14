import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

import { searchEvent } from '../store'

const StyledParagraph = styled.p`
  text-align: justify;
  padding: 0 12px;
`

const Location = styled.div`
  /* display: inline; */
  background-color: rgba(13, 159, 234, 0.08);
  border-radius: 20px 10px / 20px;
  width: 100%;
  height: 100%;
`

const Header = () => {
  const now = new Date()
  const nowString = format(now, 'eeee, d MMMM y | p')

  return (
    <StyledParagraph>
      {nowString}{' '}
      <Location onClick={() => searchEvent()}>Mumbai, India</Location>
    </StyledParagraph>
  )
}

export default Header
