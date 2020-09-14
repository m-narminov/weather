import { createStore, createEffect, createEvent } from 'effector'
import axios from 'axios'

const apiKey = '330216f9e3042b8a57a7865c3de67865'

export const appInit = createEvent('Init app')

export const $searchMode = createStore(false)
export const $currentCity = createStore(null)
export const $currentWeek = createStore([])
export const $searchString = createStore('')

// group by city name
export const $cities = createStore([
  { id: 0, title: 'San Francisco', country: 'US', temperature: 23 },
  { id: 1, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 2, title: 'Manila', country: ', Philippines', temperature: 33 },
  { id: 3, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 4, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 5, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 6, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 7, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 8, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 9, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 10, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 11, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 12, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 13, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 14, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 15, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 16, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 17, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 18, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 19, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 20, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 21, title: 'Los Angeles', country: 'US', temperature: 33 },
  { id: 22, title: 'Los Angeles', country: 'US', temperature: 33 },
])

export const searchEvent = createEvent('Search city event')
export const selectCityEvent = createEvent('Select city')
export const changeSearchString = createEvent('Change search string')

const setCitiesFromLocalstorege = createEvent('Set cities from localstorage')
const setCurrentCityFromLocalstorege = createEvent(
  'Set current city from localstorage'
)

export const searchCityFx = createEffect({
  handler: async ({ cityName }) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    )
    console.log(res.data)
    return res.data
  },
})

const getCityInfoFx = createEffect({
  handler: async () => {
    const res = await axios.get()
    return res.data
  },
})

$searchMode.on(searchEvent, () => true).on(selectCityEvent, () => false)

$cities
  .on(setCitiesFromLocalstorege, (_, citiesFromLs) => citiesFromLs)
  .on(searchCityFx, (_, foundCity) => [..._, foundCity])

$searchString.on(changeSearchString, (_, newString) => newString)

appInit.watch(() => {
  try {
    console.log('App init')
    // const cities = localStorage.getItem('weatherCities')
    // setCitiesFromLocalstorege(cities)
    // const currentCity = localStorage.getItem('currentCity')
    // setCurrentCityFromLocalstorege(currentCity)
  } catch (e) {
    console.error(`app init error ${e}`)
  }
})
