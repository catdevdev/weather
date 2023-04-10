import React from 'react'

import logo from './img/logo.png'
import * as S from './styles'

interface SidebarProps {
  children: React.ReactElement
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <S.Container>
      <S.Logo src={logo} />
      {children}
    </S.Container>
  )
}

export { Sidebar }
