import { ParentSize } from '@visx/responsive'
import React, { useEffect, useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useDispatch } from 'react-redux'
import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
import { io } from 'socket.io-client'

import { useAppDispatch, useAppSelector } from '@shared/hook/redux'
import ContextBar from '@shared/ui/ContextBar'
import Loader from '@shared/ui/Loader'
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
import { weatherRecordsSlice } from '@entities/WeatherRecord/slices/weatherRecordsSlice'
import WindSpeedAndDirection from '@entities/WeatherRecord/charts/WindSpeedAndDirection'
import WindSpeed from '@entities/WeatherRecord/charts/WindSpeed'

const Overview = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const { dateFrom, dateTo } = getTimeFrame({
    from: searchParams.get('from'),
    to: searchParams.get('to'),
    online: searchParams.get('online') as '20min' | '60min' | null,
  })

  const { weatherstation_id } = useParams()

  const socketRef = useRef(null)

  useEffect(() => {
    if (socketRef.current) {
      // Close the existing socket connection
      // @ts-ignore
      socketRef.current.close()
    }

    const socket = io('http://46.175.147.63:9001/')
    // @ts-ignore
    socketRef.current = socket

    socket.emit('room', weatherstation_id)
    socket.on('send_last_weather_record', function (data) {
      dispatch(weatherRecordsSlice.actions.newWeatherRecordsRealTime(data))
    })

    return () => {
      // Clean up the socket connection when the component unmounts
      if (socketRef.current) {
        // @ts-ignore
        socketRef.current.close()
        socketRef.current = null
      }
    }
  }, [weatherstation_id])

  useEffect(() => {
    dispatch(
      getWeatherRecords({
        weatherStationId: weatherstation_id || '',
        gte: dateFrom,
        lte: dateTo,
      }),
    )
  }, [
    weatherstation_id,
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
      {isLoading && <Loader />}
      {!isLoading &&
        weatherstation_id !== '40d5b96d-bb16-4936-8918-b5a6bd1e16c5' && (
          <div tw="grid grid-cols-2 w-full flex-wrap gap-5">
            <RegularLineChart
              valueName="Temperature"
              currentValue={weatherRecords[weatherRecords.length - 1][
                weatherRecords[weatherRecords.length - 1]?.length - 1
              ]?.weatherRecord?.temperatureFromDTH22?.toFixed(3)}
              dimension="°C"
              dataSet={convertWeatherRecordsFromChartSet(
                weatherRecords,
                'temperatureFromDTH22',
              )}
              dateFrom={dateFrom}
              dateTo={dateTo}
            />
            <RegularLineChart
              valueName="Temperature"
              currentValue={weatherRecords[weatherRecords.length - 1][
                weatherRecords[weatherRecords.length - 1].length - 1
              ]?.weatherRecord?.temperatureFromBMP180?.toFixed(3)}
              dimension="°C"
              dataSet={convertWeatherRecordsFromChartSet(
                weatherRecords,
                'temperatureFromBMP180',
              )}
              dateFrom={dateFrom}
              dateTo={dateTo}
            />
            <RegularLineChart
              valueName="Humidity"
              currentValue={weatherRecords[weatherRecords.length - 1][
                weatherRecords[weatherRecords.length - 1].length - 1
              ]?.weatherRecord?.humidityFromDTH22?.toFixed(3)}
              dimension="%"
              dataSet={convertWeatherRecordsFromChartSet(
                weatherRecords,
                'humidityFromDTH22',
              )}
              dateFrom={dateFrom}
              dateTo={dateTo}
            />
            <RegularLineChart
              valueName="Atmosphere pressure"
              currentValue={weatherRecords[weatherRecords.length - 1][
                weatherRecords[weatherRecords.length - 1].length - 1
              ]?.weatherRecord?.pressureFromBMP180?.toFixed(3)}
              dimension="pa"
              dataSet={convertWeatherRecordsFromChartSet(
                weatherRecords,
                'pressureFromBMP180',
              )}
              dateFrom={dateFrom}
              dateTo={dateTo}
            />
            <RegularLineChart
              valueName="Rain"
              currentValue={weatherRecords[weatherRecords.length - 1][
                weatherRecords[weatherRecords.length - 1].length - 1
              ]?.weatherRecord?.analogSignalFromRainSensor?.toFixed(3)}
              dimension="units"
              dataSet={convertWeatherRecordsFromChartSet(
                weatherRecords,
                'analogSignalFromRainSensor',
              )}
              dateFrom={dateFrom}
              dateTo={dateTo}
            />
          </div>
        )}
      {!isLoading &&
        weatherstation_id === '40d5b96d-bb16-4936-8918-b5a6bd1e16c5' && (
          <div tw="flex flex-wrap gap-6 w-full">
            <div tw="flex gap-6 w-full">
              <WindSpeedAndDirection
                windAngle={
                  weatherRecords[weatherRecords.length - 1][
                    weatherRecords[weatherRecords.length - 1].length - 1
                  ]?.weatherRecord?.windAngle
                }
                windSpeed={10}
              />
              <WindSpeed
                currentValue={weatherRecords[weatherRecords.length - 1][
                  weatherRecords[weatherRecords.length - 1].length - 1
                ]?.weatherRecord?.windSpeed?.toFixed(1)}
                dimension="m/s"
                dataSet={convertWeatherRecordsFromChartSet(
                  weatherRecords,
                  'windSpeed',
                )}
                dateFrom={dateFrom}
                dateTo={dateTo}
              />
            </div>
            <div tw="flex gap-6 w-full">
              <RegularLineChart
                valueName="Temperature"
                currentValue={weatherRecords[weatherRecords.length - 1][
                  weatherRecords[weatherRecords.length - 1].length - 1
                ]?.weatherRecord?.temperature?.toFixed(3)}
                dimension="°C"
                dataSet={convertWeatherRecordsFromChartSet(
                  weatherRecords,
                  'temperature',
                )}
                dateFrom={dateFrom}
                dateTo={dateTo}
              />
              <RegularLineChart
                valueName="Pressure"
                currentValue={weatherRecords[weatherRecords.length - 1][
                  weatherRecords[weatherRecords.length - 1].length - 1
                ]?.weatherRecord?.atmospheric_pressure?.toFixed(3)}
                dimension="Pa"
                dataSet={convertWeatherRecordsFromChartSet(
                  weatherRecords,
                  'atmospheric_pressure',
                )}
                dateFrom={dateFrom}
                dateTo={dateTo}
              />
            </div>
          </div>
        )}

      <Outlet />
    </>
  )
}

export default Overview
