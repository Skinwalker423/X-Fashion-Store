import React from "react";
import './category-card-styles.scss';

const CategoryCard = ({ imageUrl, category}) => {

    return (
        <div className="category-container">
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="category-body-container">
                <h2>{category}</h2>
                <p>Browse Now!</p>
            </div>
        </div>
    )
}

export default CategoryCard;