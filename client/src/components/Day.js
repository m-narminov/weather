import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'

import daySunny from '@iconify/icons-wi/day-sunny'
// import cloudyIcon from '@iconify/icons-wi/cloudy'
// import cloudyGusts from '@iconify/icons-wi/cloudy-gusts'
// import cloudyWindy from '@iconify/icons-wi/cloudy-windy'
// import dayCloudy from '@iconify/icons-wi/day-cloudy'
// import dayCloudyGusts from '@iconify/icons-wi/day-cloudy-gusts'
// import dayCloudyHigh from '@iconify/icons-wi/day-cloudy-high'
// import dayCloudyWindy from '@iconify/icons-wi/day-cloudy-windy'
// import dayFog from '@iconify/icons-wi/day-fog'
// import dayHail from '@iconify/icons-wi/day-hail'
// import dayHaze from '@iconify/icons-wi/day-haze'
// import dayLightWind from '@iconify/icons-wi/day-light-wind'
// import dayLightning from '@iconify/icons-wi/day-lightning'
// import dayRain from '@iconify/icons-wi/day-rain'
// import dayRainMix from '@iconify/icons-wi/day-rain-mix'
// import dayRainWind from '@iconify/icons-wi/day-rain-wind'
// import dayShowers from '@iconify/icons-wi/day-showers'
// import daySleet from '@iconify/icons-wi/day-sleet'
// import daySleetStorm from '@iconify/icons-wi/day-sleet-storm'
// import daySnow from '@iconify/icons-wi/day-snow'
// import daySnowThunderstorm from '@iconify/icons-wi/day-snow-thunderstorm'
// import celsiusIcon from '@iconify/icons-wi/celsius'
// import upIcon from '@iconify/icons-wi/direction-up'
// import downIcon from '@iconify/icons-wi/direction-down'

import Temperature from './Temperature'

const StyledDay = styled.div`
  display: inline-block;
  /* border: 1px solid red; */
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  color: #444;
  padding: 16px;
  margin: 10px;
  height: 101px;
  min-width: 95px;
`

const StyledBlock = styled.div`
  font-size: 8px;
  line-height: 10px;
`

const Day = ({ title, date, max, min }) => (
  <StyledDay>
    <Icon icon={daySunny} />
    <p>
      {title}, {date}
    </p>
    <StyledBlock>
      <Temperature value={max} monospace up />
      &nbsp;
      <Temperature value={min} monospace />
    </StyledBlock>
  </StyledDay>
)

export default Day
