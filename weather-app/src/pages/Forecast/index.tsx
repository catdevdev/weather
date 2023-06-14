import _ from 'lodash'
import React, { useState, useEffect } from 'react'

import Loader from '@shared/ui/Loader'
import PageHeader from '@shared/ui/PageHeader'

import ForecastRegularLineChart from '@entities/WeatherRecord/charts/ForecastRegularLineChart'
import RegularLineChart from '@entities/WeatherRecord/charts/RegularLineChart'
import { convertWeatherRecordsFromChartSet } from '@entities/WeatherRecord/helper/convertWeatherRecordsFromChartSet'

import { WeatherstationTriggerStatus } from '@features/MapWeatherstationSelect'

import Layout from '@widgets/Layout'
import 'twin.macro'

import Image1 from './1.png'
import Image2 from './2.png'
import Image3 from './3.png'

const Forecast = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadingTimer = _.debounce(() => {
      setIsLoading(false)
    }, 2000)

    loadingTimer()

    return () => {
      loadingTimer.cancel()
    }
  }, [])

  return (
    <>
      <PageHeader>Forecast</PageHeader>
      {isLoading && <Loader />}
      {!isLoading && (
        <div tw="">
          <img tw="mt-12 w-2/3" src={Image1} />
          <img tw="mt-12 w-2/3" src={Image2} />
          <img tw="mt-12 w-2/3" src={Image3} />
          {/* <ForecastRegularLineChart
            valueName="Temperature"
            dimension="°C"
            dataSet={convertWeatherRecordsFromChartSet(
              // @ts-ignore
              weatherData.weather_records,
              'temperatureFromDTH22',
            )}
            dateFrom={'2023-06-13T00:00:13+0300'}
            dateTo={'2023-06-14T00:00:13+0300'}
          /> */}
        </div>
      )}
    </>
  )
}

export default Forecast
