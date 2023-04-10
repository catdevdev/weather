import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from './Header'
import { Main } from './Main'
import { Sidebar } from './Sidebar'

interface LayoutProps {
  headerContent: React.ReactElement
  sidebarNavigationContent: React.ReactElement
}

const Layout = ({ headerContent, sidebarNavigationContent }: LayoutProps) => {
  return (
    <>
      <Header>{headerContent}</Header>
      <Sidebar>{sidebarNavigationContent}</Sidebar>
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

export default Layout
