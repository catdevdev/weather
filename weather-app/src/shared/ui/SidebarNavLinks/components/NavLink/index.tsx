import React from 'react'
import { IconType } from 'react-icons'
import { WiNightAltRainMix } from 'react-icons/wi'
import { NavLinkProps as NavLinkPropsRouter } from 'react-router-dom'

import * as S from './styles'

interface NavLinkProps extends NavLinkPropsRouter {
  icon: IconType
}

const NavLink = ({ icon: Icon, ...props }: NavLinkProps) => {
  return (
    <S.NavLink
      {...props}
      children={({ isActive }) =>
        isActive ? <Icon color="black" /> : <Icon color="gray" />
      }
    />
  )
}

export { NavLink }
