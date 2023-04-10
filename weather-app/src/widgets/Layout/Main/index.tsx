import React from 'react'

import * as S from './styles'

interface MainProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[]
}

const Main = ({ ...props }: MainProps) => {
  return (
    <S.Wrapper {...props}>
      <S.Container>{props.children}</S.Container>
    </S.Wrapper>
  )
}

export { Main }
