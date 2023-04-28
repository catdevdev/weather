import {
  AnyAction,
  CombinedState,
  configureStore,
  Reducer,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

// import { rocketsSlice } from '@/entities/Rockets/slices/rocketsSlice'

const rootReducer = combineReducers({
  rocketsState: rocketsSlice.reducer,
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
