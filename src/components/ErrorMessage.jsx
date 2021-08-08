import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Employees from '../modules/Employees'
import { Message } from '../styles/errorMessage'

const ErrorMessage = () => {
  const { message } = useSelector((state) => state)

  useEffect(() => {
    Employees.index()
  }, [])

  return <Message>{message}</Message>
}

export default ErrorMessage
