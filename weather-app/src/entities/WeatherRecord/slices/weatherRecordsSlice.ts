import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { getWeatherRecords } from '../api'
import { WeatherRecord, WeatherRecordState } from '../models'

// import { createRocket } from '../api/createRocket/createRocket'
// import { deleteRocketById } from '../api/deleteRocketById/deleteRocketById'
// import { editRocket } from '../api/editRocket/editRocket'
// import { fetchMoreRockets } from '../api/fetchMoreRockets/fetchMoreRockets'
// import { fetchRockets } from '../api/fetchRockets/fetchRockets'
// import { RocketsInitialState } from '../models/rockets'

const weatherRecordsSlice = createSlice({
  name: 'weatherRecords',
  initialState: {
    weatherRecords: [],
    isLoading: true,
    error: undefined,
  } as WeatherRecordState,
  reducers: {
    newWeatherRecordsRealTime: (
      state,
      action: PayloadAction<any>, // any because WeatherRecord can container random weather parameters
    ) => {
      if (state.weatherRecords.length)
        state.weatherRecords[state.weatherRecords.length - 1].push(
          action.payload,
        )
    },
  },
  extraReducers: builder => {
    builder.addCase(getWeatherRecords.pending, state => {
      state.isLoading = true
    })
    builder.addCase(getWeatherRecords.fulfilled, (state, action) => {
      state.weatherRecords = action.payload
      state.isLoading = false
    })
    builder.addCase(getWeatherRecords.rejected, (state, action) => {
      state.error = action.error.message
      state.isLoading = false
    })
  },
})

export { weatherRecordsSlice }
