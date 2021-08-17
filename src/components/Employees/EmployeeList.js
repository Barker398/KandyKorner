import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory } from 'react-router-dom'

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    const history = useHistory()

    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
        getEmployees()
    }, [])

    return (
        <>
            <h2>Employees</h2>
            <button onClick={
                () => history.push("/employees/create")
            }>
                New Employee
            </button>

        <div className="employees">
            {
                employees.map(employee => {
                    return (
                        <div className="employee" key={employee.id} id={`employee--${employee.id}`}>
                            <div className="employee__name">
                                Name: { employee.name }
                            </div>
                            <div className="employee__location">
                                Location: { employee.location.address }
                            </div>
                            <div className="employee__manager">
                                Manager: { employee.manager }
                        </div>
                        <div className="employee__hours">
                            Schedule: { employee.fullTime }
                        </div>
                        <div className="employee_hourlyRate">
                            Hourly rate: { employee.hourlyRate }
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
