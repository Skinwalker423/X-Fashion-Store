import React from "react";
import Button from "../button/button-component";
import { useContext } from "react";
import { CartDropdownContext } from "../../context/cart-dropdown-context";

import './products-card-styles.scss';

const ProductCard = ({ products }) => {

    const {name, price, imageUrl} = products;
    const {cartItems, addItemToCart} = useContext(CartDropdownContext);



    const addProductToCart = (e) => {
        e.preventDefault();
        addItemToCart(products);
        console.log('added to cart');
        console.log(cartItems);

    }

    return (
        <div className="product-card-container" >
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <h2 className="name">{name}</h2>
                <p className="price">${price}</p>
            </div>
            <Button title={'buy'} theme='inverted' onClickHandler={addProductToCart}  />                           
        </div>
    )
}

export default ProductCard;