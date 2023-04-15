import React from 'react'
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
            <NavLink icon={WiNightRainMix} to={'/ad'}>
              Overview
            </NavLink>
            <NavLink icon={WiNightRainMix} to={'/sdfdsf'}>
              Overview
            </NavLink>
          </>
        }
      />
    </>
  )
}

export default MainNavigationSidebar
