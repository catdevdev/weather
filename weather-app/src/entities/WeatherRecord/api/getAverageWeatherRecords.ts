import { createAsyncThunk } from '@reduxjs/toolkit'

import { axios } from '@shared/axios/axiosIntance'

import { GroupedAverageWeatherRecord, WeatherRecord } from '../models'

import { GetGroupedWeatherRecordParams } from './types'

const getGroupedAverageWeatherRecords = createAsyncThunk(
  'weatherStation/getGroupedAverageWeatherRecords',
  async (
    params: GetGroupedWeatherRecordParams,
  ): Promise<GroupedAverageWeatherRecord> => {
    const response = await axios.get<{
      get_average_weather_records: GroupedAverageWeatherRecord
    }>(`/weatherstation/get-average-weather-records`, { params })

    return response.data.get_average_weather_records
  },
)

export { getGroupedAverageWeatherRecords }
