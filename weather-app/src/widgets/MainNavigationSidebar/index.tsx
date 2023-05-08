import React from 'react'
import { AiOutlineDotChart, AiOutlineLineChart } from 'react-icons/ai'
import { WiNightRainMix } from 'react-icons/wi'
import { useParams } from 'react-router-dom'

import { SidebarNavLinks } from '@shared/ui/SidebarNavLinks'
import { NavLink } from '@shared/ui/SidebarNavLinks'

const MainNavigationSidebar = () => {
  const { weatherstation_id } = useParams()

  return (
    <>
      <SidebarNavLinks
        navLinks={
          <>
            <NavLink
              icon={WiNightRainMix}
              to={`/overview/${weatherstation_id}`}
            >
              Overview
            </NavLink>
            <NavLink
              icon={AiOutlineDotChart}
              to={`/statistics/${weatherstation_id}`}
            >
              Statistics
            </NavLink>
            <NavLink
              icon={AiOutlineLineChart}
              to={`/forecast/${weatherstation_id}`}
            >
              Forecast
            </NavLink>
          </>
        }
      />
    </>
  )
}

export default MainNavigationSidebar
