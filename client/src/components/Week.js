import React from 'react'
import { format } from 'date-fns'
import { useList } from 'effector-react'
import styled from 'styled-components'

import Day from './Day'
import { $weekForecast } from '../store'

const StyledDiv = styled.div`
  display: flex;
  padding: 15px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Week = () => {
  return (
    <StyledDiv>
      {useList($weekForecast, (day) => {
        const title = format(new Date(day.dt * 1000), 'EEE')
        const date = format(new Date(day.dt * 1000), 'd')
        const maxTemperature = day.temp.max
        const minTemperature = day.temp.min

        return (
          <Day
            title={title}
            date={date}
            max={maxTemperature}
            min={minTemperature}
          />
        )
      })}
    </StyledDiv>
  )
}

export default Week
