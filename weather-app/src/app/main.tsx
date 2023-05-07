import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { CustomProvider } from 'rsuite'

import GlobalStyles from '@shared/styles/GlobalStyles'

import { Routing } from '@pages/index'

import 'leaflet/dist/leaflet.css'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'rsuite/dist/rsuite-no-reset.min.css'

import { setupStore } from './redux'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={setupStore()}>
      <CustomProvider>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </CustomProvider>
    </Provider>
  </React.StrictMode>,
)
