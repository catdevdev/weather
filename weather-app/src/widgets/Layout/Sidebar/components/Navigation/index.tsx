import React from 'react'

import logo from '../../img/logo.png'

import * as S from './styles'

const Navigation = () => {
  return (
    <S.Container>
      <S.Logo src={logo}></S.Logo>
    </S.Container>
  )
}

export { Navigation }
