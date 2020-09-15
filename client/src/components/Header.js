import React from 'react'
import { InlineIcon } from '@iconify/react'
import { useStore } from 'effector-react'
import styled from 'styled-components'
import { format } from 'date-fns'
import postalCodeIcon from '@iconify/icons-map/postal-code'

import { searchEvent, $currentCityObject } from '../store'

const StyledHeader = styled.div`
  color: #999;
  display: grid;
  grid-template-columns: 70% 30%;
  line-height: 48px;
  padding: 0 8px;
`

const Location = styled.div`
  color: #0da0ea;
  font-weight: 500;
  font-size: 16px;
  background-color: rgba(13, 159, 234, 0.08);
  border-radius: 20px 10px / 20px;
`

const Header = () => {
  const now = new Date()
  const nowString = format(now, 'eeee, d MMMM y | p')
  const currentCityObject = useStore($currentCityObject)
  return (
    <StyledHeader>
      {nowString}{' '}
      {currentCityObject ? (
        <Location onClick={() => searchEvent()}>
          {currentCityObject.title}, {currentCityObject.country}{' '}
          <InlineIcon icon={postalCodeIcon} />
        </Location>
      ) : (
        ''
      )}
    </StyledHeader>
  )
}

export default Header
