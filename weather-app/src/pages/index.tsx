import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'

import AuthNavigationSidebar from '@widgets/AuthNavigationSidebar'
import Layout from '@widgets/Layout'
import MainNavigationSidebar from '@widgets/MainNavigationSidebar'
import WeatherstationsMap from '@widgets/WeatherstationsMap'

import 'twin.macro'

import { useWeatherStationMapModal } from '@widgets/WeatherstationsMap/context'

import Forecast from './Forecast'
import Overview from './Overview'
import Statistics from './Statistics'

export const Routing = () => {
  const { setIsOpen } = useWeatherStationMapModal()
  const { weatherstation_id } = useParams()

  return (
    <Routes>
      {/* main */}
      <Route
        path="*"
        element={
          <Navigate
            // to="/overview/b92047e5-b481-4374-9fde-12eb295bf373"
            to="/overview/:weatherstation_id"
            replace
          />
        }
      />
      <Route
        element={
          <Layout
            headerContent={
              <>
                <div
                  onClick={() => {
                    setIsOpen(true)
                  }}
                  tw="rounded-xl bg-neutral-200/50  p-3.5 font-medium cursor-pointer flex items-center  gap-2"
                >
                  <div>Odessa, Weatherstations map</div>

                  <div tw="w-3 h-3 bg-green-500 rounded-3xl" />
                </div>
              </>
            }
            sidebarNavigationContent={<MainNavigationSidebar />}
          />
        }
      >
        <Route path="/overview/:weatherstation_id" element={<Overview />} />
        <Route path="/statistics/:weatherstation_id" element={<Statistics />} />
        <Route path="/forecast/:weatherstation_id" element={<Forecast />} />
      </Route>
      {/* auth */}
      <Route
        element={
          <Layout
            headerContent={<Link to="/">back to main page</Link>}
            sidebarNavigationContent={<AuthNavigationSidebar />}
          />
        }
      >
        <Route path="/signin" element={<Overview />} />
        <Route path="/signup" element={<Statistics />} />
      </Route>
    </Routes>
  )
}
