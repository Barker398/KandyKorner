import React, { useContext, useEffect } from "react"
import { ProductTypeContext } from "./ProductTypeProvider"
import "./ProductType.css"


export const ProductTypeList = () => {
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)

    useEffect(() => {
        console.log("ProductTypeList: useEffect - getProductTypes")
        getProductTypes()
    }, [])

    return (
        <section className="productType">
            {
                productTypes.map(productType => {
                    return (
                        <div className="productType" key={productType.id} id={`productType--${productType.id}`}>
                            <div className="productType__productCatagory">
                                Catagory: {productType.productCatagory}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}