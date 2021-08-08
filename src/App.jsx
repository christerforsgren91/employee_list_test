import React, { useState } from 'react'
import EmployeeList from './components/EmployeeList'
import ErrorMessage from './components/ErrorMessage'
import Header from './components/Header'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './styles/themes.js'
import { ToggleInput, ToggleLabel } from './styles/toggleButton'

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`

const App = () => {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <ToggleInput type='checkbox' id='switch' />
        <ToggleLabel onClick={() => themeToggler()} for='switch'>
          Toggle
        </ToggleLabel>
        <Header />
        <EmployeeList />
        <ErrorMessage />
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
