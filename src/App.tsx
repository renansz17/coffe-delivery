import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { FixedHeader } from './components/FixedHeader'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <FixedHeader />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
