import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage/Homepage'
import { routes } from './routes'

export const Router: React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.index} element={<Homepage />} />
    </Routes>
  </BrowserRouter>
)
