import { createAsyncThunk } from '@reduxjs/toolkit'

import { axios } from '@shared/axios/axiosIntance'

import { WeatherRecord } from '../models'

import { GetWeatherRecordParams } from './types'

const getCurrentWeatherRecord = createAsyncThunk(
  'weatherStation/getWeatherRecord',
  async (params: GetWeatherRecordParams): Promise<WeatherRecord[][]> => {
    const response = await axios.get<{ weather_records: WeatherRecord[][] }>(
      `/weatherstation/get-weather-records`,
      { params },
    )

    return response.data.weather_records
  },
)

export { getCurrentWeatherRecord }
