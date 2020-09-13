import { createStore, createEffect } from 'effector'
import axios from 'axios'

const apiKey = '330216f9e3042b8a57a7865c3de67865'

export const $weekDays = createStore({
  ru: {
    0: 'Понедельник',
    1: 'Вторник',
    2: 'Среда',
    3: 'Четверг',
    4: 'Пятница',
    5: 'Суббота',
    6: 'Воскресенье',
  },
  en: {
    0: 'Monday',
    1: 'Tuesday',
    2: 'Wednesday',
    3: 'Thursday',
    4: 'Friday',
    5: 'Saturday',
    6: 'Sunday',
  },
})
export const $currentCity = createStore({})
export const $currentWeek = createStore([])

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
