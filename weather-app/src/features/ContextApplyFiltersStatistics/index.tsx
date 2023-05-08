import { timeFormat, timeParse } from 'd3-time-format'
import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Button, ButtonToolbar, DateRangePicker } from 'rsuite'

import { useAppDispatch } from '@shared/hook/redux'

import 'twin.macro'
import { getGroupedAverageWeatherRecords } from '@entities/WeatherRecord/api/getAverageWeatherRecords'
import { getTimeFrame } from '@entities/WeatherRecord/helper/getTimeFrameForCharts'

const ContextApplyFiltersStatistics = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()
  const { weatherstation_id } = useParams()

  const { dateFrom, dateTo } = getTimeFrame({
    from: searchParams.get('from'),
    to: searchParams.get('to'),
    // online: searchParams.get('online') as '20min' | '60min' | null,
  })

  return (
    <div>
      <ButtonToolbar>
        <Button
          tw="mt-6"
          appearance="primary"
          color="blue"
          onClick={() => {
            dispatch(
              getGroupedAverageWeatherRecords({
                weatherStationId: weatherstation_id || '',
                gte: dateFrom,
                lte: dateTo,
                groupBy: searchParams.get('groupBy') || '',
              }),
            )
          }}
        >
          Apply
        </Button>
      </ButtonToolbar>
    </div>
  )
}

export default ContextApplyFiltersStatistics
