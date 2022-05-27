import React,{ createContext, useState, useEffect } from "react";
import shopData from '../shopdata.json';


export const ProductsContext = createContext({
    products: []
})

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const value = {products, setProducts};

    useEffect(() =>{
        setProducts(shopData);
    }, [])

    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}