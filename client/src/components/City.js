import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import styled from 'styled-components'
import { format } from 'date-fns'
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

import Week from './Week'
import Header from './Header'
import {
  $currentCityObject,
  getCityInfoFx,
  getExtendedForecastFx,
} from '../store'

const TemperatureMain = styled.span`
  font-weight: 300;
  font-size: 64px;
  line-height: 77px;
`

const Celsius = styled(InlineIcon)`
  font-size: 24px;
  line-height: 29px;
  color: #666666;
`

const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: stretch;
`

const MiniCaption = styled.p`
  margin-top: 4px;
  font-size: 12px;
`

const Cell = styled.div`
  padding: 10px;
  text-align: center;
  display: grid;
  align-items: center;
  align-content: center;
  white-space: nowrap;
  color: ${(props) => (props.main ? '#000' : '#444')};
`

const City = () => {
  const currentCityObject = useStore($currentCityObject)
  useEffect(() => {
    async function getForecast() {
      await getCityInfoFx()
      await getExtendedForecastFx()
    }
    getForecast()
  }, [])
  console.log(`currentCityObject ${JSON.stringify(currentCityObject, null, 2)}`)

  return currentCityObject ? (
    <>
      <Header />
      <Info>
        <Cell main>
          <div>
            <Icon icon={cloudyIcon} />
          </div>
          <div>{currentCityObject.weatherDescription}</div>
        </Cell>
        <Cell main>
          <TemperatureMain>{currentCityObject.temperature}</TemperatureMain>
          <Celsius icon={celsiusIcon} />
        </Cell>
        <Cell>
          <div>
            {currentCityObject.maxTemperature}
            <InlineIcon icon={celsiusIcon} />
            <InlineIcon icon={upIcon} />
          </div>
          <div>
            {currentCityObject.minTemperature}
            <InlineIcon icon={celsiusIcon} />
            <InlineIcon icon={downIcon} />
          </div>
        </Cell>
        <Cell>
          <div>
            <Icon icon={humidityIcon} />
          </div>
          <div>{currentCityObject.humidity}%</div>
          <MiniCaption>Humidity</MiniCaption>
        </Cell>
        <Cell>
          <div>
            <Icon icon={barometerIcon} />
          </div>
          <div>{currentCityObject.pressure}&nbsp;mBar</div>
          <MiniCaption>Pressure</MiniCaption>
        </Cell>
        <Cell>
          <div>
            <Icon icon={windIcon} />
          </div>
          <div>{currentCityObject.wind}&nbsp;m/s</div>
          <MiniCaption>Wind</MiniCaption>
        </Cell>
        <Cell>
          <div>
            <Icon icon={sunriseIcon} />
          </div>
          <div>{format(new Date(currentCityObject.sunrise), 'K:mm a')}</div>
          <MiniCaption>Sunrise</MiniCaption>
        </Cell>
        <Cell>
          <div>
            <Icon icon={sunsetIcon} />
          </div>
          <div>{format(new Date(currentCityObject.sunset), 'K:mm a')}</div>
          <MiniCaption>Sunset</MiniCaption>
        </Cell>
        <Cell>
          <div>
            <Icon icon={timeIcon} />
          </div>
          <div>{currentCityObject.daytime}</div>
          <MiniCaption>Daytime</MiniCaption>
        </Cell>
      </Info>
      <Week />
    </>
  ) : (
    ''
  )
}

export default City
