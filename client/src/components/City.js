import React from 'react'
import styled from 'styled-components'
import { Icon, InlineIcon } from '@iconify/react'
import celsiusIcon from '@iconify/icons-wi/celsius'
import barometerIcon from '@iconify/icons-wi/barometer'
import sunriseIcon from '@iconify/icons-wi/sunrise'
import sunsetIcon from '@iconify/icons-wi/sunset'
import humidityIcon from '@iconify/icons-wi/humidity'
import windIcon from '@iconify/icons-wi/strong-wind'
import cloudyIcon from '@iconify/icons-wi/cloudy'
import downIcon from '@iconify/icons-wi/direction-down'
import upIcon from '@iconify/icons-wi/direction-up'
import timeIcon from '@iconify/icons-wi/time-8'
import postalCodeIcon from '@iconify/icons-map/postal-code'

import Week from './Week'
import Header from './Header'
const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

const MiniCaption = styled.p`
  font-size: 12px;
`

const Cell = styled.div`
  color: ${(props) => (props.main ? '#000' : '#444')};
  /* padding: 18px; */
`

const City = () => {
  return (
    <>
      <Header />
      <Info>
        <Cell main>
          <div>
            <Icon icon={cloudyIcon} />
          </div>
          <div>Cloudy</div>
        </Cell>
        <Cell main>
          <h1>
            29
            <InlineIcon icon={celsiusIcon} />
          </h1>
        </Cell>
        <Cell>
          <div>
            35
            <InlineIcon icon={celsiusIcon} />
            <InlineIcon icon={upIcon} />
          </div>
          <div>
            27
            <InlineIcon icon={celsiusIcon} />
            <InlineIcon icon={downIcon} />
          </div>
        </Cell>
        <Cell>
          <div>
            <Icon icon={humidityIcon} />
          </div>
          <div>73%</div>
          <MiniCaption>Humidity</MiniCaption>
        </Cell>
        <Cell>
          <Icon icon={barometerIcon} />
          <div>1,009 mBar</div>
          <MiniCaption>Pressure</MiniCaption>
        </Cell>
        <Cell>
          <Icon icon={windIcon} />
          <div>11 km/h</div>
          <MiniCaption>Wind</MiniCaption>
        </Cell>
        <Cell>
          <Icon icon={sunriseIcon} />
          <div>6:03 AM</div>
          <MiniCaption>Sunrise</MiniCaption>
        </Cell>
        <Cell>
          <Icon icon={sunsetIcon} />
          <div>7:05 PM</div>
          <MiniCaption>Sunset</MiniCaption>
        </Cell>
        <Cell>
          <Icon icon={timeIcon} />
          <div>13h 1m</div>
          <MiniCaption>Daytime</MiniCaption>
        </Cell>
      </Info>
      <Week />
    </>
  )
}

export default City
