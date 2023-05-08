import { ParentSize } from '@visx/responsive'
import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Outlet, useSearchParams } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
import { io } from 'socket.io-client'

import { useAppDispatch, useAppSelector } from '@shared/hook/redux'
import ContextBar from '@shared/ui/ContextBar'
import PageHeader from '@shared/ui/PageHeader'

import { getWeatherRecords } from '@entities/WeatherRecord/api'
import RegularLineChart from '@entities/WeatherRecord/charts/RegularLineChart'
import { convertWeatherRecordsFromChartSet } from '@entities/WeatherRecord/helper/convertWeatherRecordsFromChartSet'

import { WeatherstationTriggerStatus } from '@features/MapWeatherstationSelect'

import Layout from '@widgets/Layout'

import 'twin.macro'
import WeatherstationsMap from '@widgets/WeatherstationsMap'

import ContextTimeFrame from '@features/ContextTimeFrame'
import ContextOnline from '@features/ContextOnline'

import { getTimeFrame } from '@entities/WeatherRecord/helper/getTimeFrameForCharts'

const Overview = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const { dateFrom, dateTo } = getTimeFrame({
    from: searchParams.get('from'),
    to: searchParams.get('to'),
    online: searchParams.get('online') as '20min' | '60min' | null,
  })

  useEffect(() => {
    const socket = io('http://46.175.147.63:9001/')
    socket.emit('room', 'b92047e5-b481-4374-9fde-12eb295bf373')
    socket.on('send_last_weather_record', function (data) {
      console.log(data)
    })
  }, [])

  useEffect(() => {
    dispatch(
      getWeatherRecords({
        weatherStationId: '123',
        gte: dateFrom,
        lte: dateTo,
      }),
    )
  }, [
    searchParams.get('to'),
    searchParams.get('from'),
    searchParams.get('online'),
  ])

  const isLoading = useAppSelector(state => state.weatherRecords.isLoading)

  const weatherRecords = useAppSelector(
    state => state.weatherRecords.weatherRecords,
  )

  return (
    <>
      <PageHeader>Overview</PageHeader>
      <ContextBar>
        <ContextOnline></ContextOnline>
        <ContextTimeFrame></ContextTimeFrame>
      </ContextBar>
      {isLoading && <PulseLoader color="#999999" />}
      {!isLoading && (
        <div tw="flex w-full flex-wrap gap-5">
          <RegularLineChart
            valueName="temperature"
            currentValue={123}
            dimension="t0"
            dataSet={convertWeatherRecordsFromChartSet(
              weatherRecords,
              'temperatureFromDTH22',
            )}
            dateFrom={dateFrom}
            dateTo={dateTo}
          />
          <RegularLineChart
            valueName="temperature"
            currentValue={123}
            dimension="t0"
            dataSet={convertWeatherRecordsFromChartSet(
              weatherRecords,
              'temperatureFromBMP180',
            )}
            dateFrom={dateFrom}
            dateTo={dateTo}
          />
          <RegularLineChart
            valueName="temperature"
            currentValue={123}
            dimension="t0"
            dataSet={convertWeatherRecordsFromChartSet(
              weatherRecords,
              'humidityFromDTH22',
            )}
            dateFrom={dateFrom}
            dateTo={dateTo}
          />
          <RegularLineChart
            valueName="temperature"
            currentValue={123}
            dimension="t0"
            dataSet={convertWeatherRecordsFromChartSet(
              weatherRecords,
              'pressureFromBMP180',
            )}
            dateFrom={dateFrom}
            dateTo={dateTo}
          />
        </div>
      )}

      <Outlet />
    </>
  )
}

export default Overview
