import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'

import GlobalStyles from '@shared/styles/GlobalStyles'

import { Routing } from '@pages/index'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,
)
