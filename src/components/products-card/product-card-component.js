import React from "react";
import Button from "../button/button-component";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cart-dropdown-context";
import { Link } from "react-router-dom";

import './products-card-styles.scss';

const ProductCard = ({ products, id, category }) => {

    const {name, price, imageUrl} = products;
    const { addItemToCart} = useContext(CartDropdownContext);



    const addProductToCart = (e) => {
        e.preventDefault();
        addItemToCart(products);
        console.log(`added ${name} to cart`);

    }

    return (
        <div className="product-card-container" >
            <Link to={`/shop/${category}/${id}`}><img src={imageUrl} alt={name} /></Link>
            <div className="footer">
                <h2 className="name">{name}</h2>
                <p className="price">${price}</p>
            </div>
            <Button title={'buy'} theme='inverted' onClickHandler={addProductToCart}  />                           
        </div>
    )
}

export default ProductCard;