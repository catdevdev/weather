import React from 'react'

import { BackButton } from './components/BackButton'
import { NavLink } from './components/NavLink'
import * as S from './styles'

interface SidebarNavLinksProps {
  backButton?: React.ReactElement | React.ReactElement[]
  navLinks: React.ReactElement | React.ReactElement[]
}

const SidebarNavLinks = ({ navLinks }: SidebarNavLinksProps) => {
  return <S.Container>{navLinks}</S.Container>
}

export { SidebarNavLinks, NavLink, BackButton }
