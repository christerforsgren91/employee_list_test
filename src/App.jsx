import React from 'react'
import EmployeeList from './components/EmployeeList'
import ErrorMessage from './components/ErrorMessage'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <EmployeeList />
      <ErrorMessage />
    </>
  )
}

export default App

