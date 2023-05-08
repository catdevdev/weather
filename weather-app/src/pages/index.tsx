import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { Link, Navigate, useSearchParams } from 'react-router-dom'

import AuthNavigationSidebar from '@widgets/AuthNavigationSidebar'
import Layout from '@widgets/Layout'
import MainNavigationSidebar from '@widgets/MainNavigationSidebar'
import WeatherstationsMap from '@widgets/WeatherstationsMap'

import Forecast from './Forecast'
import Overview from './Overview'
import Statistics from './Statistics'

export const Routing = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    // if (!searchParams.get('weatherstation_id')) {
    //   setSearchParams({
    //     weatherstation_id: 'b92047e5-b481-4374-9fde-12eb295bf373',
    //   })
    // }
  }, [])

  return (
    <Routes>
      {/* main */}
      <Route
        path="*"
        element={
          <Navigate
            to="/overview/b92047e5-b481-4374-9fde-12eb295bf373"
            replace
          />
        }
      />
      <Route
        element={
          <Layout
            headerContent={
              <>
                <Link to="/signin">go to singin page</Link>
                <Link to="/modal">open weatherstation modal</Link>
              </>
            }
            sidebarNavigationContent={<MainNavigationSidebar />}
          />
        }
      >
        {/* <Route path="/overview/" element={<Overview />}></Route> */}
        <Route path="/overview/:weatherstation_id" element={<Overview />} />
        {/* <Route path="/modal" element={<WeatherstationsMap />} /> */}
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
