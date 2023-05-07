import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { getWeatherstations } from '../api/getWeatherstations'
import { WeatherStationState } from '../models'

// import { createRocket } from '../api/createRocket/createRocket'
// import { deleteRocketById } from '../api/deleteRocketById/deleteRocketById'
// import { editRocket } from '../api/editRocket/editRocket'
// import { fetchMoreRockets } from '../api/fetchMoreRockets/fetchMoreRockets'
// import { fetchRockets } from '../api/fetchRockets/fetchRockets'
// import { RocketsInitialState } from '../models/rockets'

const weatherStationsSlice = createSlice({
  name: 'weatherRecords',
  initialState: {
    weatherStations: [],
    isLoading: false,
    error: undefined,
  } as WeatherStationState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getWeatherstations.pending, state => {
      state.isLoading = true
    })
    builder.addCase(getWeatherstations.fulfilled, (state, action) => {
      state.weatherStations = action.payload
      state.isLoading = false
    })
    builder.addCase(getWeatherstations.rejected, (state, action) => {
      state.error = action.error.message
      state.isLoading = false
    })
  },
})

export { weatherStationsSlice }
