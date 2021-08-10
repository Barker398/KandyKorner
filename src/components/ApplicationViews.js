import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./LocationProvider"
import { LocationList } from "./LocationList"
import { ProductProvider } from "./ProductProvider"
import { ProductList } from "./ProductList"


export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <Route path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>
        </>
    )
}