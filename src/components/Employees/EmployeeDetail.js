import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory, useParams } from "react-router-dom"

export const EmployeeDetail = () => {
    const { employees, fireEmployee } = useContext(EmployeeContext)
    const [employee, setEmployee] = useState({ employee: {} })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { employeeId } = useParams();

    const history = useHistory()

    useEffect(() => {
        const thisEmployee = employees.find(e => e.id === parseInt(employeeId)) || { employee: {} }
        setEmployee(thisEmployee)
    }, [employeeId])

    // const handleRemove = () => {
    //     removeEmployee(employee.id)
    //     .then(() => {
    //         history.push("/employees")
    //     })
    // }

    const handleFire = () => {
        fireEmployee(employee.id)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <>
            {/* <button onClick={handleRemove}>
             Fire Employee
             </button> */}
            <button onClick={handleFire}>Fire Employee</button>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <div className="employee__location">Location: {employee.location.name}
                </div>
            </section>
        </>
    )
}
