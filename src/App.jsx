import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import {
  LOGIN_PAGE,
  INSCRIPTION_PAGE,
  HOME_PAGE,
} from './settings/pages_constants'
import Login from './pages/Sign/Login'
import Inscription from './pages/Sign/Inscription'
import SideMenu from './components/Layout/SideMenu/SideMenu'
import { themes } from './settings/themes_constants'
import SidePrincipalMenu from './components/Layout/SidePrincipalMenu/SidePrincipalMenu'

const routes = [
  { id: 1, path: LOGIN_PAGE, component: <Login title="Connexion" /> },
  {
    id: 2,
    path: INSCRIPTION_PAGE,
    component: <Inscription title="Inscription" />,
  },
  {
    id: 3,
    path: HOME_PAGE,
    component: <p>Hello</p>,
  },
]

const Layout = ({ children }) => {
  let location = useLocation()
  const isAuthPage = [LOGIN_PAGE, INSCRIPTION_PAGE].includes(location.pathname)

  return !isAuthPage ? (
    <Screen>
      <SidePrincipalMenu />
      <div style={{ marginLeft: '52px' }}></div>
      <SideMenu />
      {children}
    </Screen>
  ) : (
    <Screen>{children}</Screen>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ id, path, component }) => (
            <Route key={id} path={path} element={component} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

const Screen = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
`
