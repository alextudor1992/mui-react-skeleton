import React, { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { routes } from './routes'
import { State } from '../state/store'

export const PrivateRoute: React.FunctionComponent<PropsWithChildren<any>> = ({ children }) => {
  const user = useSelector<State>((state) => state.user)
  if (!user) {
    return <Navigate replace to={routes.login} />
  }
  return children
}
