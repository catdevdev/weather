import { ParentSize } from '@visx/responsive'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

import Chart from './components/Chart'
import * as S from './styles'

interface Props {
  valueName: string
  dimension: string
  dataSet?: { value: number; createdAt: string }[][]
  forecastedDataSet?: { value: number; createdAt: string }[]
  dateFrom: string
  dateTo: string
}

const ForecastRegularLineChart = ({
  valueName,
  dimension,
  dataSet,
  forecastedDataSet,
  dateFrom,
  dateTo,
}: Props) => {
  return (
    <S.Container>
      <>
        <S.DataLabel>
          {valueName} <b>{dimension}</b>
        </S.DataLabel>

        <ParentSize>
          {({ width }) => (
            <Chart
              dataSet={dataSet}
              forecastedDataSet={forecastedDataSet}
              width={width}
              height={400}
              dateFrom={dateFrom}
              dateTo={dateTo}
            />
          )}
        </ParentSize>
      </>
    </S.Container>
  )
}

export default ForecastRegularLineChart
