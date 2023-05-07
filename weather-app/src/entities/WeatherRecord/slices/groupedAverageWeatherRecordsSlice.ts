import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { getWeatherRecords } from '../api'
import { getGroupedAverageWeatherRecords } from '../api/getAverageWeatherRecords'
import { GroupedAverageWeatherRecordState } from '../models'

// import { createRocket } from '../api/createRocket/createRocket'
// import { deleteRocketById } from '../api/deleteRocketById/deleteRocketById'
// import { editRocket } from '../api/editRocket/editRocket'
// import { fetchMoreRockets } from '../api/fetchMoreRockets/fetchMoreRockets'
// import { fetchRockets } from '../api/fetchRockets/fetchRockets'
// import { RocketsInitialState } from '../models/rockets'

const groupedAverageWeatherRecordsSlice = createSlice({
  name: 'groupedAverageWeatherRecords',
  initialState: {
    groupedAverageWeatherRecords: {},
    isLoading: true,
    error: undefined,
  } as GroupedAverageWeatherRecordState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getGroupedAverageWeatherRecords.pending, state => {
      state.isLoading = true
    })
    builder.addCase(
      getGroupedAverageWeatherRecords.fulfilled,
      (state, action) => {
        state.groupedAverageWeatherRecords = action.payload
        state.isLoading = false
      },
    )
    builder.addCase(
      getGroupedAverageWeatherRecords.rejected,
      (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      },
    )
  },
})

export { groupedAverageWeatherRecordsSlice }
