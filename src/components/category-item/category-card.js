import React from "react";
import { CategoryContainer, CategoryBody, BackgroundImage } from "./category-card-styles";

const CategoryCard = ({ imageUrl, category}) => {

    return (
        <CategoryContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryBody>
                <h2>{category}</h2>
                <p>Browse Now!</p>
            </CategoryBody>
        </CategoryContainer>
    )
}

export default CategoryCard;