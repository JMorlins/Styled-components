import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Button from './elements/Button'

const theme = {
  primary: 'blue',
  secondary: 'green',
  alert: 'orange',
  font: 'sans-serif',
}

const H1 = styled.h1`
  font-family: ${(props) => props.theme.font};
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <H1>Styled Components</H1>
        <form action="">
          <input type="text" />
          <button>Paghimo</button>
          <Button color="primary">Paghimo</Button>
        </form>
      </div>
    </ThemeProvider>
  )
}

export default App
