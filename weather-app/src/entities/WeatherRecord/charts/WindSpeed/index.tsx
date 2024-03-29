import { ParentSize } from '@visx/responsive'

import 'twin.macro'
import Chart from './components/Chart'
import { Container, WindBar, WindBarFilled, WindBarText } from './styles'

interface Props {
  currentValue: number
  valueName: string
  dimension: string
  dataSet?: { value: number; createdAt: string }[][]
  dateFrom: string
  dateTo: string
}

function map(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

const WindSpeed = ({
  dataSet,
  dateFrom,
  dateTo,
  currentValue,
  dimension,
}: Props) => {
  const width = map(currentValue, 0, 10, 0, 100)
  console.log('test')

  return (
    <Container>
      <WindBar>
        <WindBarText>
          {currentValue} {dimension}
        </WindBarText>
        <WindBarFilled width={width + '%'} windSpeed={currentValue} />
      </WindBar>
      <ParentSize>
        {({ width }) => (
          <Chart
            dataSet={dataSet}
            width={width}
            height={275}
            dateFrom={dateFrom}
            dateTo={dateTo}
          />
        )}
      </ParentSize>
    </Container>
  )
}

export default WindSpeed
