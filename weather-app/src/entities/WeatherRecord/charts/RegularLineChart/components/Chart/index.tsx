import { AxisLeft, AxisBottom } from '@visx/axis'
import { curveBasis } from '@visx/curve'
import { GridRows, GridColumns } from '@visx/grid'
import { Group } from '@visx/group'
import cityTemperature, {
  CityTemperature,
} from '@visx/mock-data/lib/mocks/cityTemperature'
import { withParentSize } from '@visx/responsive'
import { ParentSize } from '@visx/responsive'
import { scaleTime, scaleLinear } from '@visx/scale'
import { LinePath } from '@visx/shape'
import { Threshold } from '@visx/threshold'
import React from 'react'

import { useAppSelector } from '@shared/hook/redux'

import * as S from '../../styles'

export const background = 'transparent'

// accessors
const date = (d: CityTemperature) => new Date(d.date).valueOf()
const ny = (d: CityTemperature) => Number(d['New York'])
const sf = (d: CityTemperature) => Number(d['San Francisco'])

const defaultMargin = { top: 40, right: 30, bottom: 50, left: 40 }

type DataSet = { value: number; createdAt: string }[][]
type FlatDataSet = { value: number; createdAt: string }[]

interface Props {
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
  dataSet?: DataSet
  dateFrom: string
  dateTo: string
}

const Chart = ({
  width = 1000,
  height = 500,
  margin = defaultMargin,
  dataSet,
  dateFrom,
  dateTo,
}: Props) => {
  if (!dataSet) {
    return null
  }
  // bounds
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  const flatDataSet: FlatDataSet = dataSet.flatMap(subSet => {
    return subSet.map(set => {
      return {
        value: set.value,
        createdAt: set.createdAt,
      }
    })
  })

  const timeScale = scaleTime<number>({
    domain: [
      new Date(dateFrom).valueOf(),
      new Date(dateTo).valueOf(),
      // Math.min(...flatDataSet.map(set => new Date(set.createdAt).valueOf())),
      // Math.max(...flatDataSet.map(set => new Date(set.createdAt).valueOf())),
    ],
  })

  const temperatureScale = scaleLinear<number>({
    domain: [
      Math.min(...flatDataSet.map(set => set.value)),
      Math.max(...flatDataSet.map(set => set.value)),
    ],
    nice: true,
  })

  timeScale.range([0, xMax])
  temperatureScale.range([yMax, 0])

  return (
    <svg width={width} height={height}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={'transparent'}
        rx={14}
      />
      <Group left={margin.left} top={margin.top}>
        <GridRows
          scale={temperatureScale}
          width={xMax}
          height={yMax}
          stroke="#e0e0e0"
        />
        <GridColumns
          scale={timeScale}
          width={xMax}
          height={yMax}
          stroke="#e0e0e0"
        />
        <line x1={xMax} x2={xMax} y1={0} y2={yMax} stroke="#e0e0e0" />
        <AxisBottom
          top={yMax}
          scale={timeScale}
          numTicks={width > 520 ? 10 : 5}
        />
        <AxisLeft scale={temperatureScale} />
        <text x="-70" y="15" transform="rotate(-90)" fontSize={10}>
          Temperature (°F)
        </text>
        {dataSet.map(set => {
          return (
            <LinePath
              data={set}
              curve={curveBasis}
              x={d => {
                return timeScale(Date.parse(d.createdAt).valueOf())
              }}
              y={d => {
                return temperatureScale(d.value)
              }}
              stroke="#222"
              strokeWidth={1}
            />
          )
        })}
      </Group>
    </svg>
  )
}

// const MyChart = () => (
//   <div>
//     <ParentSize>
//       {parent => (
//         <RegularLineChart width={parent.width} height={parent.height} />
//       )}
//     </ParentSize>
//   </div>
// )

// export default MyChart
export default Chart