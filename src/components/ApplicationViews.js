import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"
import { CustomerList } from "./Customers/CustomerList"
import { CustomerProvider } from "./Customers/CustomerProvider"
import { EmployeeProvider } from "./Employees/EmployeeProvider"
import { EmployeeList } from "./Employees/EmployeeList"
import { EmployeeForm } from "./Employees/EmployeeForm"
import { EmployeeDetail } from "./Employees/EmployeeDetail"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <ProductProvider>
                    <CustomerProvider>
                        <EmployeeProvider>

                            <Route exact path="/locations">
                                <LocationList />
                            </Route>
                            <Route path="/products">
                                <ProductList />
                            </Route>

                            <Route path="/customers">
                                <CustomerList />
                            </Route>

                            <Route exact path="/employees">
                                <EmployeeList />
                            </Route>
                            <Route exact path="/employees/create">
                                <EmployeeForm />
                            </Route>
                            <Route path="/employees/detail/:employeeId(\d+)">
                                {/*(\d+) is regex to match only a digit. The
                         `:employeeId` must be a interger.*/}
                                <EmployeeDetail />
                            </Route>
                        </EmployeeProvider>
                    </CustomerProvider>
                </ProductProvider>
            </LocationProvider>

        </>
    )
}