import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes/routes'

const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  
  li {
    list-style: none;
  }

  input {
      webkit-appearance: none;
      moz-appearance: textfield; 
    }

`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <MainRoutes/>
    </BrowserRouter>

  </React.StrictMode>
)
