import React from 'react'
import styled from 'styled-components'
import RoutesApp from './routes'
import { AuthProvider } from './components/Contexts/auth'

const AppContainer = styled.div`
    width: 100vw;
    weight: 100vh;
    background-image: #FFF;

`

function App() {
  return(
    <AppContainer>
      <AuthProvider>
        <RoutesApp/>
      </AuthProvider>
        
    </AppContainer>
    
  )
}

export default App
