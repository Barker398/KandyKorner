
import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)



// export const KandyKorner = () => (
//     <>
//     <h2>Kandy Korner</h2>

//     <h2>Locations</h2>
//     <article className="locations">
//         <LocationProvider>
//             <LocationList />
//         </LocationProvider>
//     </article>

//     <h2>Products</h2>
//     <article className="products">
//         <ProductProvider>
//             <ProductList/>
//         </ProductProvider>
//     </article>

//     <h2>ProductTypes</h2>
//     <article className="productType">
//         <ProductTypeProvider>
//             <ProductTypeList/>
//         </ProductTypeProvider>
//     </article>
//     </>
// )