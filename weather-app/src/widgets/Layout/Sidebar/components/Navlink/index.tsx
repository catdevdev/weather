import React from 'react'
import { WiNightAltRainMix } from 'react-icons/wi'
import { NavLinkProps as NavLinkPropsRouter } from 'react-router-dom'

import * as S from './styles'

interface NavLinkProps extends NavLinkPropsRouter {
  children: string
}

const Navlink = ({ children }: NavLinkProps) => {
  return (
    <S.NavLink
      to={'/'}
      children={({ isActive }) =>
        isActive ? (
          <div>
            <WiNightAltRainMix color="black" />
            {children}
          </div>
        ) : (
          <div>
            <WiNightAltRainMix color="gray" />
            {children}
          </div>
        )
      }
    />
  )
}

export { Navlink }
