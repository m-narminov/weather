import React from 'react'
import styled from 'styled-components'
import { useStore } from 'effector-react'
import { getDay, getYear } from 'date-fns'

import { $weekDays } from '../store'

const Header = () => {
  const now = new Date()
  const currentYear = getYear(now)
  const currentWeekDay = getDay(now)

  const weekDays = useStore($weekDays)
  return <p>{weekDays.en[currentWeekDay]}</p>
}

export default Header
