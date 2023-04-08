import React from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyles from '@shared/styles/GlobalStyles'

import App from './App'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
