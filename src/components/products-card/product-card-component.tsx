import React, {MouseEvent, FC} from "react";
import Button, {BUTTON_THEME} from "../button/button-component";
import { Link } from "react-router-dom";
import { ProductCardContainer, Name, Price, Footer } from "./products-card-styles";
import { selectCartItems } from "../../store/cartDropdown/cartDropdown.selector";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem } from "../../store/cartDropdown/cartDropdown.action";
import { CategoryItem } from "../../store/categories/categories.types";
import { CartItem } from "../../store/cartDropdown/cartDropdown.types";


export type ProductCardProps = {
    product: CategoryItem;
    category: string;
    key: number;
}

const ProductCard: FC<ProductCardProps> = ({ product, category, key }) => {

    const dispatch = useDispatch()
    const {name, price, imageUrl, id} = product;
    const cartItems = useSelector(selectCartItems);
    
    const addProductToCart = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(incrementItem(cartItems, product as CartItem));
        console.log(`added ${name} to cart`);
    }

    return (
        <ProductCardContainer key={key} >
            <Link to={`/shop/${category}/${id}`}><img src={imageUrl} alt={name} /></Link>
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            <Button title='buy' theme={BUTTON_THEME.inverted} onClick={addProductToCart}  />                           
        </ProductCardContainer>
    )
}

export default ProductCard;