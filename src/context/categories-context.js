import React,{ createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase-utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {

    const [categoriesMap, setCategoriesMap] = useState({});
    const value = {categoriesMap, setCategoriesMap};



    useEffect(() =>{
        const getCatagoryMap = async() => {
        const data = await getCategoriesAndDocuments();
        setCategoriesMap(data);
    }   
        getCatagoryMap();
        
    }, [])

    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}