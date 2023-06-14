import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { CustomProvider } from 'rsuite'
import 'rsuite/dist/rsuite-no-reset.min.css'

import GlobalStyles from '@shared/styles/GlobalStyles'

import { WeatherStationsMapModalProvider } from '@widgets/WeatherstationsMap/context'

import { Routing } from '@pages/index'

import 'leaflet/dist/leaflet.css'
import '@kirklin/reset-css/kirklin.css'

import { setupStore } from './redux'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={setupStore()}>
      <CustomProvider>
        <BrowserRouter>
          <WeatherStationsMapModalProvider>
            <Routing />
          </WeatherStationsMapModalProvider>
        </BrowserRouter>
      </CustomProvider>
    </Provider>
  </React.StrictMode>,
)
