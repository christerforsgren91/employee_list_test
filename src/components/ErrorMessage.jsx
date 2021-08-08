import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Employees from '../modules/Employees'
const ErrorMessage = () => {
  const { message } = useSelector((state) => state)

  useEffect(() => {
    Employees.index()
  }, [])

  return <div>{message}</div>
}

export default ErrorMessage