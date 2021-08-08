import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Employees from '../modules/Employees'
import {
  EmployeeContainer,
  EmployeeCard,
  EmployeeImg,
  EmployeeName,
  EmployeeMail,
} from '../styles/employeeList'

const EmployeeList = () => {
  const { employees } = useSelector((state) => state)

  useEffect(() => {
    Employees.index()
  }, [])

  let employeeList = employees.map((employee, index) => {
    return (
      <EmployeeCard key={index}>
        <EmployeeImg src={employee.avatar} alt='employee avatar' />
        <EmployeeName>
          {employee.first_name} {employee.last_name}
        </EmployeeName>
        <EmployeeMail>{employee.email}</EmployeeMail>
      </EmployeeCard>
    )
  })

  return <EmployeeContainer>{employeeList}</EmployeeContainer>
}

export default EmployeeList
