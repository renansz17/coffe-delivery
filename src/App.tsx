import React from 'react'
import { ThemeProvider } from 'styled-components'
import { FixedHeader } from './components/FixedHeader'
import { Home } from './Pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <FixedHeader />
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
