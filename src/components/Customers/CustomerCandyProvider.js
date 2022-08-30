import React, { createContext, useState } from "react";

export const CustomerCandyContext = createContext()

export const CustomerCandyProvider = (props) => {
    const [customerCandys, setCustomerCandys] = useState([])

    const getCustomerCandys = () => {
        return fetch("http://localhost:8088/myOrders")
        .then(res => res.json())
        .then(setCustomerCandys)
    }

    const addCustomerCandy = customerCandyId => {
        return fetch("http://localhost:8088/myOrders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerCandyId)
        })
        .then(getCustomerCandys)
    }
    
    const getCustomerCandysById = (customerCandyId) => {
        return fetch(`http://localhost:8088/customerCandys/${customerCandyId}`)
        .then(res => res.json())
    }
    return (
        <CustomerCandyContext.Provider value={{
            customerCandys, getCustomerCandys, addCustomerCandy,
            getCustomerCandysById
        }}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}