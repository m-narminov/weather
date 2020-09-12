import React from 'react'
import styled from 'styled-components'
import celsiusIcon from '@iconify/icons-wi/celsius'
import upIcon from '@iconify/icons-wi/direction-up'
import downIcon from '@iconify/icons-wi/direction-down'

const StyledSpan = styled.span`
  font-size: ${props => props.size}
  font-family: ${props => props.monospace ? 'monospace' : 'Barlow'}
`

const Temperature = ({ value, monospace, size }) => {
  return (
    <StyledSpan>{value}</StyledSpan>
  )
}

export default Temperature
