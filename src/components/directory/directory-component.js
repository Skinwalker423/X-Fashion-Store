import React from "react";
import CategoryCard from "../category-item/category-card";
import './directory-styles.scss';


const Directory = ({categories}) => {

    return(
        <div className="categories-container">
        {categories.map(({id, imageUrl, title}) => 
            (
                <CategoryCard category={title} imageUrl={imageUrl} key={id} />
            ))}
        </div>
        )
    }

export default Directory;