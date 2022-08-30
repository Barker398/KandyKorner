import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ProductContext } from "./ProductProvider"
import "./Products.css"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)

    const history = useHistory()

    useEffect(() => {
        console.log("ProductList: useEffect - getProducts")
        getProducts()
    }, [])

    return (
        <section className="products">
            {
                products.map(product => {
                    return (
                        <div className="product" key={product.id} id={`product--${product.id}`}>
                            <div className="product__name">
                                Name: {product.productName}
                            </div>
                            <div className="product__price">
                                Price: {product.price}
                            </div>
                            <div className="product__productTypeId">
                                Candy Type: {product.productType.productCatagory}
                            </div>
                            <button className="buy_candy" onClick={
                                () => history.push("/MyOrders")}>
                                Purchase
                            </button>
                        </div>
                    )
                })
            }
        </section>
    )
}                                      