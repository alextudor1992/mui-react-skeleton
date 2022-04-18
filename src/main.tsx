import React from 'react'
import ReactDOM from 'react-dom/client'
import { apolloClient } from './apollo/client'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { Router } from './router/router'
import { store } from './state/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ApolloProvider>,
)
