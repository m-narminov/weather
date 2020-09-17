import { createStore, createEffect, createEvent } from 'effector'
import axios from 'axios'

const apiKey = '330216f9e3042b8a57a7865c3de67865'
const weatherURL = 'https://api.openweathermap.org/data/2.5'

export const appInit = createEvent('Init app')

export const $searchMode = createStore(false)
export const $currentCity = createStore('Minsk')
export const $currentCityObject = createStore(null)
export const $weekForecast = createStore([])
export const $searchString = createStore('')
export const $cancelToken = createStore(null)

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
export const setCancelToken = createEvent('Set cancel token')

const setCitiesFromLocalstorege = createEvent('Set cities from localstorage')
// const setCurrentCityFromLocalstorege = createEvent(
//   'Set current city from localstorage'
// )

$cancelToken.on(setCancelToken, (_, newToken) => newToken)

export const searchCityFx = createEffect({
  handler: async ({ cityName }) => {
    if (cityName !== '') {
      console.log('search city fx if city name ')
      if ($cancelToken.getState()) {
        $cancelToken.getState().cancel()
      }
      // Create a new CancelToken
      setCancelToken(axios.CancelToken.source())
      try {
        const res = await axios.get(
          `${weatherURL}/weather?q=${cityName}&appid=${apiKey}&units=metric`,
          { cancelToken: $cancelToken.getState() }
        )
        console.log('search city fx ', res.data)
        return res.data
      } catch (error) {
        if (axios.isCancel(error)) {
          // Handle if request was cancelled
          console.log('Request canceled', error.message)
        } else {
          // Handle usual errors
          console.log('Something went wrong: ', error.message)
        }
      }
    }
  },
})

export const getCityInfoFx = createEffect({
  handler: async () => {
    try {
      const res = await axios.get(
        `${weatherURL}/weather?q=${$currentCity.getState()}&appid=${apiKey}&units=metric`
      )
      console.log(res.data)
      return res.data
    } catch (error) {
      console.error('[Get city info fx] ', error.message)
    }
  },
})

export const getExtendedForecastFx = createEffect({
  handler: async () => {
    try {
      const latitude = $currentCityObject.getState().coord.lat
      const logitude = $currentCityObject.getState().coord.lon
      const res = await axios.get(
        `${weatherURL}/onecall?lat=${latitude}&lon=${logitude}&appid=${apiKey}&units=metric&exclude=hourly,minutely,current`
      )
      console.log('one call res.data ', res.data)
      return res.data
    } catch (e) {
      console.log('[Get extended forecast fx] ', e.message)
    }
  },
})

$searchMode.on(searchEvent, () => true).on(selectCityEvent, () => false)

$cities
  .on(setCitiesFromLocalstorege, (_, citiesFromLs) => citiesFromLs)
  .on(searchCityFx.done, (_, foundCity) => {
    const id = foundCity.sys.id
    const title = foundCity.name
    const country = foundCity.sys.country
    const temperature = foundCity.main.temp

    return [
      ..._,
      {
        id,
        title,
        country,
        temperature,
      },
    ]
  })

$searchString.on(changeSearchString, (_, newString) => newString)

$currentCityObject.on(getCityInfoFx.done, (_, { result }) => {
  const weatherDescription = result.weather[0].main || 'no weather'
  const sunrise = new Date(result.sys.sunrise * 1000)
  const sunset = new Date(result.sys.sunset * 1000)
  const sunriseMinutes = sunrise.getMinutes()
  const sunsetMinutes = sunset.getMinutes()
  const daytime = `${
    sunset.getHours() -
    sunrise.getHours() -
    (sunsetMinutes < sunriseMinutes ? 1 : 0)
  }h ${
    (sunsetMinutes < sunriseMinutes ? 60 : 0) +
    sunset.getMinutes() -
    sunrise.getMinutes()
  }m`

  return {
    daytime,
    sunrise,
    sunset,
    coord: result.coord,
    country: result.sys.country,
    humidity: result.main.humidity,
    id: result.sys.id,
    maxTemperature: result.main.temp_max,
    minTemperature: result.main.temp_min,
    pressure: result.main.pressure,
    temperature: result.main.temp,
    title: result.name,
    timezone: result.timezone,
    weatherDescription,
    wind: result.wind.speed,
  }
})

$weekForecast.on(getExtendedForecastFx.done, (_, { result }) =>
  result.daily.filter(
    (day) => new Date().getDate() !== new Date(day.dt * 1000).getDate()
  )
)

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
