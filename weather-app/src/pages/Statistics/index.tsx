import { useEffect } from 'react'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'

import { useAppDispatch, useAppSelector } from '@shared/hook/redux'

import { getGroupedAverageWeatherRecords } from '@entities/WeatherRecord/api/getAverageWeatherRecords'
import BarChart from '@entities/WeatherRecord/charts/BarChart'

import { WeatherstationTriggerStatus } from '@features/MapWeatherstationSelect'

import 'twin.macro'
import Layout from '@widgets/Layout'

const Statistics = () => {
  const dispatch = useAppDispatch()

  const { weatherstation_id } = useParams()

  useEffect(() => {
    dispatch(
      getGroupedAverageWeatherRecords({
        weatherStationId: weatherstation_id || '',
        gte: '2023-04-30T21:10:23.055000+00:00',
        lte: '2023-05-02T21:59:17.530000+00:00',
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

  // const newArray = groupedAverageWeatherRecords.pressureFromBMP180.map(obj => {
  //   const timestamp = Object.keys(obj)[0]
  //   const value = obj[timestamp]
  //   return { timestamp, value }
  // })

  // const groupedWeatherRecords = Object.entries(
  //   groupedAverageWeatherRecords.pressureFromBMP180 || {},
  // )

  const convert = (dataFromBE: { [s: string]: number }) => {
    const output = Object.entries(dataFromBE).map(([timestamp, value]) => ({
      timestamp,
      value,
    }))
    return output
  }

  // if (!groupedAverageWeatherRecords?.pressureFromBMP180) {
  //   return 'loading'
  // }

  // groupedAverageWeatherRecords.

  return (
    <div tw="flex w-full flex-wrap gap-5">
      {isLoading && <PulseLoader color="#999999" />}
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
            dataSet={convert(groupedAverageWeatherRecords.temperatureFromDTH22)}
          />
        </>
      )}
    </div>
  )
}

export default Statistics
