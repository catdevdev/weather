import React from 'react'

import * as S from './styles'

interface SidebarNavLinksProps {
  navLinks: React.ReactElement | React.ReactElement[]
}

const SidebarNavLinks = ({ navLinks }: SidebarNavLinksProps) => {
  return <S.Container>{navLinks}</S.Container>
}

export { SidebarNavLinks }
