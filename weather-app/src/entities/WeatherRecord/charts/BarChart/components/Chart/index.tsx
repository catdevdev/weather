import { AxisBottom, AxisLeft } from '@visx/axis'
import { localPoint } from '@visx/event'
import { GradientTealBlue, LinearGradient } from '@visx/gradient'
import { Grid } from '@visx/grid'
import { Group } from '@visx/group'
import { LegendOrdinal } from '@visx/legend'
import cityTemperature, {
  CityTemperature,
} from '@visx/mock-data/lib/mocks/cityTemperature'
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale'
import { Bar, BarStack } from '@visx/shape'
import { SeriesPoint } from '@visx/shape/lib/types'
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip'
import { timeParse, timeFormat } from 'd3-time-format'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

import { useAppSelector } from '@shared/hook/redux'

type CityName = 'New York' | 'San Francisco' | 'Austin'

type TooltipData = {
  bar: SeriesPoint<CityTemperature>
  key: CityName
  index: number
  height: number
  width: number
  x: number
  y: number
  color: string
}

export const background = 'transparent'
const defaultMargin = { top: 40, right: 0, bottom: 0, left: 0 }

export interface Props {
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
  dataSet: { timestamp: string; value: number }[]
}

export default function BarChart({
  width,
  height,
  margin = defaultMargin,
  dataSet,
}: Props) {
  const [searchParams] = useSearchParams()

  const formatTime = (timestamp: Date) => {
    switch (searchParams.get('groupBy')) {
      case '24H':
        return timeFormat('%B-%d')(timestamp)
      case '12H':
        return timeFormat('%B-%d')(timestamp)
      case '1H':
        return timeFormat('%H:%M')(timestamp)
      case '30T':
        return timeFormat('%H:%M')(timestamp)
    }
  }
  // const formatTime = timeFormat('%H:%M')

  const dateScale = scaleBand<string>({
    domain: dataSet.map(data => {
      return data.timestamp
    }),
    padding: 0.4,
  })

  const temperatureScale = scaleLinear<number>({
    domain: [
      Math.min(...dataSet.map(data => data.value)) - 5,
      Math.max(...dataSet.map(data => data.value)) + 5,
    ],
    nice: true,
  })

  const xMax = width
  const yMax = height - margin.top - 100

  dateScale.rangeRound([0, xMax])
  temperatureScale.range([yMax, 0])

  return (
    <div style={{ position: 'relative' }}>
      <svg width={width} height={height}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={'transparent'}
          rx={14}
        />
        <Grid
          top={margin.top}
          left={margin.left}
          xScale={dateScale}
          yScale={temperatureScale}
          width={xMax}
          height={yMax}
          stroke="black"
          strokeOpacity={0.1}
          xOffset={dateScale.bandwidth() / 2}
        />
        <GradientTealBlue id="area-gradient" />
        {/* <rect width={width} height={height} fill="url(#teal)" rx={14} /> */}
        <Group top={margin.top}>
          {dataSet.map(d => {
            const barWidth = dateScale.bandwidth()
            const barHeight = yMax - (temperatureScale(d.value) ?? 0)
            const barX = dateScale(d.timestamp)
            const barY = yMax - barHeight
            return (
              <Bar
                key={`area-gradient`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="rgb(28, 88, 255)"
                // toOpacity={0.1}
                // from={'#a0a'}
                // to={'#a0aa'}
              />
            )
          })}

          <AxisLeft
            top={0}
            left={30}
            numTicks={10}
            scale={temperatureScale.nice()}
            stroke={'#222'}
            tickStroke={'#222'}
            tickLabelProps={{
              fill: '#222',
              fontSize: 11,
              textAnchor: 'middle',
            }}
          />
          <AxisBottom
            top={yMax + margin.top}
            scale={dateScale}
            tickFormat={date => {
              const timestamp = new Date(date)
              return formatTime(timestamp) // Format the time as a string
              // return date
            }}
            stroke={'#222'}
            tickStroke={'#222'}
            tickLabelProps={{
              fill: '#222',
              fontSize: 11,
              textAnchor: 'middle',
            }}
          />
        </Group>
      </svg>
    </div>
  )
}
