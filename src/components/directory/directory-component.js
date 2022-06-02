import React from "react";
import CategoryCard from "../category-item/category-card";
import { CategoriesContainer } from "./directory-styles";


const Directory = ({categories}) => {

    return(
        <CategoriesContainer className="categories-container">
        {categories.map(({id, imageUrl, title}) => 
            (
                <CategoryCard category={title} imageUrl={imageUrl} key={id} />
            ))}
        </CategoriesContainer>
        )
    }

export default Directory;