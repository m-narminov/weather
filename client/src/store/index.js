import { createStore, createEffect } from 'effector' 
import axios from 'axios'


export const currentCity = createStore(null)
export const currentWeek = createStore([])


const loadEffect = createEffect({
  handler: async () => {
    const res = await axios.get('https://openweathermap.com')
  }
})
