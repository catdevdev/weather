import React from 'react'
import { AiOutlineDotChart, AiOutlineLineChart } from 'react-icons/ai'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import { FiUserPlus } from 'react-icons/fi'
import { IoLogInOutline } from 'react-icons/io5'
import { WiNightRainMix } from 'react-icons/wi'

import { SidebarNavLinks } from '@shared/ui/SidebarNavLinks'
import { NavLink } from '@shared/ui/SidebarNavLinks'

const MainNavigationSidebar = () => {
  return (
    <>
      <SidebarNavLinks
        navLinks={
          <>
            <NavLink icon={IoLogInOutline} to={'/signin'}>
              Sign In
            </NavLink>
            <NavLink icon={FiUserPlus} to={'/signup'}>
              Sign Up
            </NavLink>
          </>
        }
      />
    </>
  )
}

export default MainNavigationSidebar
