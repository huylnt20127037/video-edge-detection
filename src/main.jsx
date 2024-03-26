import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import theme from './core/theme/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme} toastOptions={{ defaultOptions: { colorScheme: 'orange', variant: 'subtle', duration: '3000', position: 'bottom-right' } }}>
    <App />
  </ChakraProvider>
)
