import React from 'react'
import { WiNightAltRainMix } from 'react-icons/wi'

import * as S from './styles'

const Navlink = () => {
  return (
    <S.NavLink
      to={'/'}
      children={({ isActive }) =>
        isActive ? (
          <WiNightAltRainMix color="black" />
        ) : (
          <WiNightAltRainMix color="gray" />
        )
      }
    />
  )
}

export { Navlink }
