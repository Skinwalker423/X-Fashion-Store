import { createContext, useState, useEffect } from "react";


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
const removeCartItem = (cartItems, productToRemove) => {

    const foundItem = cartItems.find(item => item.id === productToRemove.id);

    if(foundItem.qty === 1){
        const newCartItems = cartItems.filter(item =>
            item.id !== productToRemove.id 
        )
        return [...newCartItems]
    }

    if(foundItem){
        return cartItems.map(item =>
            item.id === productToRemove.id ?
             {...item, qty: item.qty - 1} : item
        )
    }

    return [...cartItems]
}
const cancelCartItem = (cartItems, productToCancel) => {

    const foundItem = cartItems.find(item => item.id === productToCancel.id);

    if(foundItem){
        const newCartItems = cartItems.filter(item =>
            item.id !== productToCancel.id 
        )
        return [...newCartItems]
    }

    return [...cartItems]
}

export const CartDropdownContext = createContext({
    cartDropdownDisplayed: false,
    setCartDropdownDisplayed: () => {},
    cartItems: [],
    addItemToCart: () => {},
    totalQuanityInCart: 0,
    setTotalQuanityInCart: () => {},
    totalPrice: 0,
    setTotalPrice: () => {},
})

export const CartDropdownProvider = ({children}) => {
    const [cartDropdownDisplayed, setCartDropdownDisplayed] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalQuanityInCart, setTotalQuanityInCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const totals = cartItems.reduce((TotalPrice, currentItem ) => {
            return TotalPrice + (currentItem.price * currentItem.qty)
            }, 0)
        setTotalPrice(totals);
    }, [cartItems, setTotalPrice])

    useEffect(() => {
            
            const totalQuantity = cartItems.reduce((previous, current) => {
                return previous + current.qty;
            }, 0)
            setTotalQuanityInCart(totalQuantity);
    }, [cartItems, setTotalQuanityInCart])



    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemToCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const cancelItemFromCart = (productToCancel) => {
        setCartItems(cancelCartItem(cartItems, productToCancel))
    }

    

    const value = {cartDropdownDisplayed, setCartDropdownDisplayed, cartItems, addItemToCart, totalQuanityInCart, setTotalQuanityInCart, removeItemToCart, totalPrice, setTotalPrice, cancelItemFromCart};
    return(
        <CartDropdownContext.Provider value={value} >{children}</CartDropdownContext.Provider>
    )
}

