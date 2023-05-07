import {
  AnyAction,
  CombinedState,
  configureStore,
  Reducer,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { groupedAverageWeatherRecordsSlice } from '@entities/WeatherRecord/slices/groupedAverageWeatherRecordsSlice'
import { weatherRecordsSlice } from '@entities/WeatherRecord/slices/weatherRecordsSlice'
import { weatherStationsSlice } from '@entities/WeatherStation'

const rootReducer = combineReducers({
  weatherStations: weatherStationsSlice.reducer,
  weatherRecords: weatherRecordsSlice.reducer,
  groupedAverageWeatherRecordsSlice: groupedAverageWeatherRecordsSlice.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend().concat(),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
