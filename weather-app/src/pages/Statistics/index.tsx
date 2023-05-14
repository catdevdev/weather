import { useEffect } from 'react'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
import { Button } from 'rsuite'

import { useAppDispatch, useAppSelector } from '@shared/hook/redux'
import ContextBar from '@shared/ui/ContextBar'
import Loader from '@shared/ui/Loader'
import PageHeader from '@shared/ui/PageHeader'

import { getGroupedAverageWeatherRecords } from '@entities/WeatherRecord/api/getAverageWeatherRecords'
import BarChart from '@entities/WeatherRecord/charts/BarChart'

import ContextTimeFrame from '@features/ContextTimeFrame'
import { WeatherstationTriggerStatus } from '@features/MapWeatherstationSelect'

import Layout from '@widgets/Layout'

import 'twin.macro'
import ContextGroupBy from '@features/ContextGroupBy'
import ContextApplyFiltersStatistics from '@features/ContextApplyFiltersStatistics'

const Statistics = () => {
  const dispatch = useAppDispatch()

  const { weatherstation_id } = useParams()

  useEffect(() => {
    dispatch(
      getGroupedAverageWeatherRecords({
        weatherStationId: weatherstation_id || '',
        gte: '2023-04-30T21:10:23.055000+00:00',
        lte: '2023-05-02T21:59:17.530000+00:00',
        groupBy: '1H',
      }),
    )
  }, [])

  const groupedAverageWeatherRecords = useAppSelector(
    state =>
      state.groupedAverageWeatherRecordsSlice.groupedAverageWeatherRecords,
  )
  const isLoading = useAppSelector(
    state => state.groupedAverageWeatherRecordsSlice.isLoading,
  )

  const convert = (dataFromBE: { [s: string]: number }) => {
    console.log(dataFromBE)

    if (!dataFromBE || !Object.entries(dataFromBE).length) {
      return []
    }
    const output = Object.entries(dataFromBE).map(([timestamp, value]) => ({
      timestamp,
      value,
    }))
    return output
  }

  return (
    <>
      <PageHeader>Statistics</PageHeader>
      <ContextBar>
        <ContextGroupBy />
        <ContextTimeFrame />
        <ContextApplyFiltersStatistics />
      </ContextBar>

      {isLoading && <Loader />}
      <div tw="flex w-full flex-wrap gap-5">
        {!isLoading && (
          <>
            <BarChart
              dataSet={convert(groupedAverageWeatherRecords.pressureFromBMP180)}
            />
            <BarChart
              dataSet={convert(groupedAverageWeatherRecords.humidityFromDTH22)}
            />
            <BarChart
              dataSet={convert(
                groupedAverageWeatherRecords.temperatureFromBMP180,
              )}
            />
            <BarChart
              dataSet={convert(
                groupedAverageWeatherRecords.temperatureFromDTH22,
              )}
            />
            <BarChart
              dataSet={convert(
                groupedAverageWeatherRecords.analogSignalFromRainSensor,
              )}
            />
          </>
        )}
      </div>
    </>
  )
}

export default Statistics
