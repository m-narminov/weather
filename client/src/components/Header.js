import React from 'react'
import { InlineIcon } from '@iconify/react'
import styled from 'styled-components'
import { format } from 'date-fns'
import postalCodeIcon from '@iconify/icons-map/postal-code'

import { searchEvent } from '../store'

const StyledParagraph = styled.div`
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
      <Location onClick={() => searchEvent()}>
        Mumbai, India <InlineIcon icon={postalCodeIcon} />
      </Location>
    </StyledParagraph>
  )
}

export default Header
