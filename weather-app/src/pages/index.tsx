import { Routes, Route } from 'react-router'

import Layout from '@widgets/Layout'
import MainNavigationSidebar from '@widgets/MainNavigationSidebar'

import Overview from './Overview'

export const Routing = () => {
  return (
    <Routes>
      <Route
        element={
          <Layout
            headerContent={<div>nice</div>}
            sidebarNavigationContent={<MainNavigationSidebar />}
          />
        }
      >
        <Route path="/" element={<Overview />} />
      </Route>
    </Routes>
  )
}
