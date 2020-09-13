import React from 'react'
import styled from 'styled-components'
import { InlineIcon } from '@iconify/react'
import celsiusIcon from '@iconify/icons-wi/celsius'
import upIcon from '@iconify/icons-wi/direction-up'
import downIcon from '@iconify/icons-wi/direction-down'

const StyledSpan = styled.span`
  font-size: ${(props) => props.size};
  font-family: ${(props) => (props.monospace ? 'monospace' : 'Barlow')};
`

const Temperature = ({ value, monospace, size, up }) => {
  return (
    <StyledSpan monospace={monospace} size={size}>
      {value}
      <InlineIcon icon={celsiusIcon} />
      <InlineIcon icon={up ? upIcon : downIcon} />
    </StyledSpan>
  )
}

export default Temperature
