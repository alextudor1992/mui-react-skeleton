import { useState } from 'react'
import logo from '../../assets/logo.svg'
import '../../assets/App.css'
import { Box, Button, Link, Typography } from '@mui/material'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../apollo/client'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={null}>
        <Box className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Typography>Hello Vite + React!</Typography>
            <Typography>
              <Button variant={'outlined'} onClick={() => setCount((count) => count + 1)}>
                count is: {count}
              </Button>
            </Typography>
            <Typography>
              Edit <code>App.tsx</code> and save to test HMR updates.
            </Typography>
            <Typography>
              <Link
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </Link>
              {' | '}
              <Link
                className="App-link"
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite Docs
              </Link>
            </Typography>
          </header>
        </Box>
      </Provider>
    </ApolloProvider>
  )
}

export default App
