import { ACTION_TYPES, CartItem } from "./cartDropdown.types";
import { createAction, ActionWithPayload, withMatcher } from "../../utils/reducer/createAction";
import { CategoryItem } from "../categories/categories.types";



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

    if(foundItem && foundItem.qty === 1){
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



export const setCartDropdownDisplayed = withMatcher((isDisplayed => {
    return createAction(ACTION_TYPES.SET_CARTDROPDOWN_DISPLAY, isDisplayed);
        
    })

export const setTotalQuanityInCart = withMatcher((totalQuantity) => {
    return createAction(ACTION_TYPES.SET_TOTAL_QTY, totalQuantity);
})

export const setTotalPrice = withMatcher((totals) => {
    return createAction(ACTION_TYPES.SET_TOTAL_PRICE, totals);
})

export const setCartItems = withMatcher((newCartItems) => {
    return createAction(ACTION_TYPES.SET_CART_ITEMS, newCartItems);

})

export const incrementItem = (cartItems, item) => {
    const newCartItems = addCartItem(cartItems, item);
    return createAction(ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const decrementItem = (cartItems, item) => {
    const newCartItems = removeCartItem(cartItems, item);
    return createAction(ACTION_TYPES.SET_CART_ITEMS, newCartItems);                             
}
export const cancelItemAndRemoveFromCart = (cartItems, item) => {
    const newCartItems = cancelCartItem(cartItems, item);
    return createAction(ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

//     return createAction(ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, totalQuanityInCart: totalQuantity, totalPrice: totals });
        
//     }

