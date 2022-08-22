import { ACTION_TYPES, CartItem } from "./cartDropdown.types";
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/createAction";
import { CategoryItem } from "../categories/categories.types";








const addCartItem = (cartItems: CartItem[], productToAdd : CategoryItem) : CartItem[] => {
        const foundItem = cartItems.find(item => item.id === productToAdd.id);
        if(foundItem){
            return cartItems.map(item =>
                item.id === productToAdd.id ?
                {...item, qty: item.qty + 1} : item
            )
        }
        return [...cartItems, {...productToAdd, qty: 1}]
    }
const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem) : CartItem[] => {

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
const cancelCartItem = (cartItems: CartItem[], productToCancel: CartItem) : CartItem[] => {

    const foundItem = cartItems.find(item => item.id === productToCancel.id);

    if(foundItem){
        const newCartItems = cartItems.filter(item =>
            item.id !== productToCancel.id 
        )
        return [...newCartItems]
    }

    return [...cartItems]
}


export type SetCartDropdownDisplayed = ActionWithPayload<ACTION_TYPES.SET_CARTDROPDOWN_DISPLAY, boolean>

export type SetTotalQuanityInCart = ActionWithPayload<ACTION_TYPES.SET_TOTAL_QTY, number>

export type SetTotalPrice = ActionWithPayload<ACTION_TYPES.SET_TOTAL_PRICE, number>

export type SetCartItems = ActionWithPayload<ACTION_TYPES.SET_CART_ITEMS, CartItem[]>



export const setCartDropdownDisplayed = withMatcher((isDisplayed : boolean) : SetCartDropdownDisplayed => {
    return createAction(ACTION_TYPES.SET_CARTDROPDOWN_DISPLAY, isDisplayed);
        
    })

export const setTotalQuanityInCart = withMatcher((totalQuantity: number) : SetTotalQuanityInCart => {
    return createAction(ACTION_TYPES.SET_TOTAL_QTY, totalQuantity);
})

export const setTotalPrice = withMatcher((totals: number) : SetTotalPrice => {
    return createAction(ACTION_TYPES.SET_TOTAL_PRICE, totals);
})

export const setCartItems = withMatcher((newCartItems: CartItem[]) : SetCartItems => {
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

//     return createAction(ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, totalQuanityInCart: totalQuantity, totalPrice: totals });
        
//     }

