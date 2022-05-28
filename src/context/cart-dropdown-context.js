import { createContext, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {

    const foundItem = cartItems.find(item => item.id === productToAdd.id);

    if(foundItem){
        return cartItems.map(item =>
            item.id === productToAdd.id ?
             {...item, qty: item.qty + 1} : item
        )
    }

    return [...cartItems, {...productToAdd, qty: 1}]
}

export const CartDropdownContext = createContext({
    cartDropdownDisplayed: false,
    setCartDropdownDisplayed: () => {},
    cartItems: [],
    addItemToCart: () => {},
    totalQuanityInCart: 0,
    setTotalQuanityInCart: () => {},
})

export const CartDropdownProvider = ({children}) => {
    const [cartDropdownDisplayed, setCartDropdownDisplayed] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalQuanityInCart, setTotalQuanityInCart] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = {cartDropdownDisplayed, setCartDropdownDisplayed, cartItems, addItemToCart, totalQuanityInCart, setTotalQuanityInCart};
    return(
        <CartDropdownContext.Provider value={value} >{children}</CartDropdownContext.Provider>
    )
}

