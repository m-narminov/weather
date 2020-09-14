import React from 'react'
import styled from 'styled-components'
import { InlineIcon } from '@iconify/react'
import celsiusIcon from '@iconify/icons-wi/celsius'
import upIcon from '@iconify/icons-wi/direction-up'
import downIcon from '@iconify/icons-wi/direction-down'

const StyledSpan = styled.span`
  font-size: ${(props) => props.size};
  letter-spacing: 0.1em;
  color: #999;
`

const Temperature = ({ value, size, up }) => {
  return (
    <StyledSpan size={size}>
      {value}
      <InlineIcon icon={celsiusIcon} />
      &nbsp;
      <InlineIcon icon={up ? upIcon : downIcon} />
    </StyledSpan>
  )
}

export default Temperature
