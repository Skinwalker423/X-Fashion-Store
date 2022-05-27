import React from "react";
import Button from "../button/button-component";

import './products-card-styles.scss';

const ProductCard = ({ products }) => {

    const {name, price, imageUrl} = products;

    return (
        <div className="product-card-container" >
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <h2 className="name">{name}</h2>
                <p className="price">${price}</p>
            </div>
            <Button title={'buy'} theme='inverted'  />                           
        </div>
    )
}

export default ProductCard;