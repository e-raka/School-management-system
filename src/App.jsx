import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LOGIN_PAGE, INSCRIPTION_PAGE } from './settings/pages_constants'
import Login from './pages/Sign/Login'
import Inscription from './pages/Sign/Inscription'

const routes = [
  { id: 1, path: LOGIN_PAGE, component: <Login title="Connexion" /> },
  {
    id: 1,
    path: INSCRIPTION_PAGE,
    component: <Inscription title="Inscription" />,
  },
]

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ id, path, component }) => (
          <Route key={id} path={path} element={component} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
