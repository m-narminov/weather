import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useList, useStore } from 'effector-react'
import { InlineIcon } from '@iconify/react'
import celsiusIcon from '@iconify/icons-wi/celsius'

import {
  $cities,
  $searchString,
  searchCityFx,
  changeSearchString,
} from '../store'

const StyledLocation = styled.div`
  /* margin: -500px; */
`

const StyledParagraph = styled.div`
  font-weight: 500;
  line-height: 19px;
  padding: 15px;
  color: #999;
`

const StyledCity = styled.p`
  border: 0;
  border-radius: ${(props) => (props.selected ? '4px' : '')};
  background: ${(props) => (props.selected ? '#ECF7FD' : '')};
  text-align: justify;
  letter-spacing: -0.05em;
  padding: 15px;
`

const StyledInput = styled.input`
  color: #000000;
  background: #f3f3f3;
  border: 0;
  border-radius: 4px;
  padding: 0 15px;
  height: 40px;
  line-height: 22px;
`

const StyledList = styled.ul`
  height: 400px;
  overflow: hidden;
  overflow-y: scroll;
`

const StyledTemperature = styled.span`
  color: #666;
`

const Search = () => {
  const searchString = useStore($searchString)

  useEffect(() => {
    ;(async () => {
      await searchCityFx({ cityName: searchString })
    })()
  }, [searchString])

  // const findCity = async (val) => {
  //   let token
  //   if (token) {
  //     token.cancel()
  //   }
  //   token = axios.CancelToken.source()
  //   try {
  //     await searchCityFx({ cityName: val })
  //   } catch (e) {
  //     if (axios.isCancel(e)) {
  //       console.log('Request cancelled ', e.message)
  //     } else {
  //       console.log('Request cancelled ', e.message)
  //     }
  //   }
  // }

  const citiesList = useList($cities, (city) => (
    <StyledCity key={city.id}>
      {city.title}, {city.country}
      <StyledTemperature>
        {' '}
        {city.temperature}
        <InlineIcon icon={celsiusIcon} />
      </StyledTemperature>
    </StyledCity>
  ))
  return (
    <StyledLocation>
      <StyledParagraph>Location</StyledParagraph>
      <StyledInput
        placeholder="Find city..."
        onChange={(e) => {
          console.log('onchange search city e = ', e)
          changeSearchString(e.target.value)
        }}
      />
      <StyledList>{citiesList}</StyledList>
    </StyledLocation>
  )
}

export default Search
