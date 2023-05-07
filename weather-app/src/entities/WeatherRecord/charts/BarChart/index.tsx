import { ParentSize } from '@visx/responsive'
import React from 'react'

import Chart from './components/Chart'
import * as S from './styles'

interface Props {
  dataSet: { timestamp: string; value: number }[]
}

const BarChart = ({ dataSet }: Props) => {
  return (
    <S.Container>
      <h1>Temperature</h1>

      <ParentSize>
        {({ width }) => <Chart dataSet={dataSet} width={width} height={400} />}
      </ParentSize>
    </S.Container>
  )
}

export default BarChart
