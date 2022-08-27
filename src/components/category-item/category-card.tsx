import React from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContainer, CategoryBody, BackgroundImage } from "./category-card-styles";

export type CategoryCardProps = {
    category: {
        imageUrl: string;
        title: string;
        route: string;
    }
    
}

const CategoryCard = ({category}: CategoryCardProps) => {

    const { imageUrl, title, route} = category;
    const navigate = useNavigate();

    const navigateHandler = () => navigate(route);

    return (
        <CategoryContainer onClick={navigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryBody>
                <h2>{title}</h2>
                <p>Browse Now!</p>
            </CategoryBody>
        </CategoryContainer>
    )
}

export default CategoryCard;