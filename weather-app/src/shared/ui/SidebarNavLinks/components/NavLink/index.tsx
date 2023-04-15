import React from 'react'
import { IconType } from 'react-icons'
import { WiNightAltRainMix } from 'react-icons/wi'
import { NavLinkProps as NavLinkPropsRouter } from 'react-router-dom'

import * as S from './styles'

interface NavLinkProps extends NavLinkPropsRouter {
  children: string
  icon: IconType
}

const NavLink = ({ children, icon: Icon, ...props }: NavLinkProps) => {
  return (
    <S.NavLink
      {...props}
      children={({ isActive }) =>
        isActive ? (
          <S.NavLinkWrapper>
            <Icon color="black" />
            {children}
          </S.NavLinkWrapper>
        ) : (
          <S.NavLinkWrapper>
            <Icon color="gray" />
            {children}
          </S.NavLinkWrapper>
        )
      }
    />
  )
}

export { NavLink }
