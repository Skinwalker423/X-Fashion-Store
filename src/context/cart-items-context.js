import { createContext, useState } from "react";

export const CartItemsContext = createContext({
    cartItems: [],
    setCartItems: () => {},
})

export const CartItemsProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const value = {cartItems, setCartItems};

    return (
        <CartItemsContext.Provider value={value}>{children}</CartItemsContext.Provider>
    )
}