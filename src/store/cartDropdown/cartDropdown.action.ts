import { ACTION_TYPES, CartItem } from "./cartDropdown.types";
import { createAction, ActionWithPayload, withMatcher } from "../../utils/reducer/createAction";
import { CategoryItem } from "../categories/categories.types";



const addCartItem = (cartItems: CartItem[], productToAdd: CartItem) => {
        const foundItem = cartItems.find(item => item.id === productToAdd.id);
        if(foundItem){
            return cartItems.map(item =>
                item.id === productToAdd.id ?
                {...item, qty: item.qty + 1} : item
            )
        }
        return [...cartItems, {...productToAdd, qty: 1}]
    }
const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem) => {

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
const cancelCartItem = (cartItems: CartItem[], productToCancel: CartItem) => {

    const foundItem = cartItems.find(item => item.id === productToCancel.id);

    if(foundItem){
        const newCartItems = cartItems.filter(item =>
            item.id !== productToCancel.id 
        )
        return [...newCartItems]
    }

    return [...cartItems]
}



export const setCartDropdownDisplayed = withMatcher((isDisplayed: boolean) => {
    return createAction(ACTION_TYPES.SET_CARTDROPDOWN_DISPLAY, isDisplayed);
        
    })

export const setTotalQuanityInCart = withMatcher((totalQuantity: number) => {
    return createAction(ACTION_TYPES.SET_TOTAL_QTY, totalQuantity);
})

export const setTotalPrice = withMatcher((totals: number) => {
    return createAction(ACTION_TYPES.SET_TOTAL_PRICE, totals);
})

export const setCartItems = withMatcher((newCartItems: CartItem[]) => {
    return createAction(ACTION_TYPES.SET_CART_ITEMS, newCartItems);

})

export const incrementItem = (cartItems: CartItem[], item: CartItem) => {
    const newCartItems = addCartItem(cartItems, item);
    return createAction(ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const decrementItem = (cartItems: CartItem[], item: CartItem) => {
    const newCartItems = removeCartItem(cartItems, item);
    return createAction(ACTION_TYPES.SET_CART_ITEMS, newCartItems);                             
}
export const cancelItemAndRemoveFromCart = (cartItems: CartItem[], item: CartItem) => {
    const newCartItems = cancelCartItem(cartItems, item);
    return createAction(ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

