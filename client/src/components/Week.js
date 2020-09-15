import React from 'react'
// import { useStore } from 'effector-react'
import styled from 'styled-components'

import Day from './Day'

const StyledDiv = styled.div`
  display: flex;
  padding: 15px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Week = () => {
  return (
    <StyledDiv>
      <Day title="Mon" date={14} max={25} min={18} />
      <Day title="Tue" date={15} max={25} min={18} />
      <Day title="Wed" date={16} max={25} min={18} />
      <Day title="Thr" date={17} max={25} min={18} />
      <Day title="Fri" date={18} max={25} min={18} />
      <Day title="Sat" date={19} max={25} min={18} />
      <Day title="Sun" date={20} max={25} min={18} />
    </StyledDiv>
  )
}

export default Week
