import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./KandyKorner.css";

export const KandyKorner = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("kandy_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);











// import React from "react"
// import { NavBar } from "./nav/NavBar"
// import { ApplicationViews } from "./ApplicationViews"
// import "./KandyKorner.css"

// export const KandyKorner = () => (
//     <>
//         <NavBar />
//         <ApplicationViews />
//     </>
// )



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