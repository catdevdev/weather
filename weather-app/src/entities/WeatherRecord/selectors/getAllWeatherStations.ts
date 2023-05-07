import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@app/redux'

export const getFlatWeatherRecords = createSelector(
  (state: RootState) => state.weatherRecords.weatherRecords,
  weatherRecords => {
    return {
      flatWeatherRecords: weatherRecords.flatMap(
        weatherRecord => weatherRecord,
      ),
    }
  },
)
