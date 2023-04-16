import React from 'react'
import { AiOutlineDotChart, AiOutlineLineChart } from 'react-icons/ai'
import { WiNightRainMix } from 'react-icons/wi'

import { SidebarNavLinks } from '@shared/ui/SidebarNavLinks'
import { NavLink } from '@shared/ui/SidebarNavLinks'

const MainNavigationSidebar = () => {
  return (
    <>
      <SidebarNavLinks
        navLinks={
          <>
            <NavLink icon={WiNightRainMix} to={'/'}>
              Overview
            </NavLink>
            <NavLink icon={AiOutlineDotChart} to={'/statistics'}>
              Statistics
            </NavLink>
            <NavLink icon={AiOutlineLineChart} to={'/forecast'}>
              Forecast
            </NavLink>
          </>
        }
      />
    </>
  )
}

export default MainNavigationSidebar
