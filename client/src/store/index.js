import { createStore, createEffect, createEvent, serialize } from 'effector'
import axios from 'axios'

const apiKey = '330216f9e3042b8a57a7865c3de67865'

export const $searchMode = createStore(false)
export const $currentCity = createStore({})
export const $currentWeek = createStore([])

export const searchEvent = createEvent('Search city event')
export const selectCityEvent = createEvent('Select city')

$searchMode.on(searchEvent, () => true).on(selectCityEvent, () => false)

const loadFx = createEffect({
  handler: async ({ cityName }) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    )
    return res.data
  },
})

const getCityInfoFx = createEffect({
  handler: async () => {
    const res = await axios.get()
    return res.data
  },
})
