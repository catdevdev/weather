import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Outlet } from 'react-router-dom'

import { WeatherstationTriggerStatus } from '@features/MapWeatherstationSelect'

import Layout from '@widgets/Layout'
import WeatherstationsMap from '@widgets/WeatherstationsMap'

const Overview = () => {
  return (
    <>
      <div>123</div>
      <Outlet />
    </>
  )
}

export default Overview
