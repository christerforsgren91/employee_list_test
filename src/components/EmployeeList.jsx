import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Employees from '../modules/Employees'

const EmployeeList = () => {
  const { employees } = useSelector((state) => state)

  useEffect(() => {
    Employees.index()
  }, [])

  let employeeList = employees.map((employee, index) => {
    return (
      <div key={index} className='card'>
        <img src={employee.avatar} alt='employee avatar' />
        <h4>
          {employee.first_name} {employee.last_name}
        </h4>
        <p>{employee.email}</p>
      </div>
    )
  })

  return <div>{employeeList}</div>
}

export default EmployeeList
