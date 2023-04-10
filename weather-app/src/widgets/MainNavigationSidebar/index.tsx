import React from 'react'
import { WiNightRainMix } from 'react-icons/wi'

import { SidebarNavLinks } from '@shared/ui/SidebarNavLinks'
import { NavLink } from '@shared/ui/SidebarNavLinks'

const MainNavigationSidebar = () => {
  return (
    <>
      <SidebarNavLinks
        navLinks={
          <NavLink icon={WiNightRainMix} to={'/'}>
            Overview
          </NavLink>
        }
      />
    </>
  )
}

export default MainNavigationSidebar
