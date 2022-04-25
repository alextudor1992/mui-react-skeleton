import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { PrivateRoute } from './PrivateRoute'
import { Typography } from '@mui/material'

export const Router: React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={routes.index}
        element={
          <PrivateRoute>
            <Typography variant={'h4'}>Homepage</Typography>
          </PrivateRoute>
        }
      />
      <Route path={routes.login} element={<Typography>Sign in page</Typography>} />
      <Route path={'*'} element={<Typography>Not found</Typography>} />
    </Routes>
  </BrowserRouter>
)
