import { createAsyncThunk } from '@reduxjs/toolkit'

import { axios } from '@shared/axios/axiosIntance'

import { WeatherStation } from '../models'

// import { CreateArgument, CreateRocketResponse } from './types'

const getWeatherstations = createAsyncThunk(
  'weatherStations/getWeatherStations',
  async (): Promise<WeatherStation[]> => {
    const response = await axios.get<WeatherStation[]>(
      `/weatherstations/get-weatherstations`,
    )

    return response.data
  },
)

export { getWeatherstations }
