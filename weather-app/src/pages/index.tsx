import { Routes, Route } from 'react-router'
import { Link } from 'react-router-dom'

import Layout from '@widgets/Layout'
import MainNavigationSidebar from '@widgets/MainNavigationSidebar'

import Forecast from './Forecast'
import Overview from './Overview'
import Statistics from './Statistics'
import AuthNavigationSidebar from '@widgets/AuthNavigationSidebar'

export const Routing = () => {
  return (
    <Routes>
      {/* main */}
      <Route
        element={
          <Layout
            headerContent={<Link to="/signin">go to singin page</Link>}
            sidebarNavigationContent={<MainNavigationSidebar />}
          />
        }
      >
        <Route path="/" element={<Overview />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/forecast" element={<Forecast />} />
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
