import React from 'react'
import { Button, WidgetCard } from '../../shared/ui'
// import { StyledButton, StyledWidgetCard } from './index.style'
import * as S from './index.style'
import 'twin.macro'

const TodoList = () => {
  return (
    <S.StyledWidgetCard>
      <Button tw="bg-red-500" variant="primary">
        1234
      </Button>

      <StyledButton variant="primary">1234</StyledButton>

      <Button tw="bg-blue-700 ml-3" variant="primary">
        1234
      </Button>

      <Button tw="bg-blue-700 ml-3" variant="primary">
        1234
      </Button>

      <div tw="bg-red-500">red</div>
    </StyledWidgetCard>
  )
}

export default TodoList
