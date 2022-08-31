import { CartItem } from "./cartDropdown.types";
import { AnyAction } from "redux";
import { setCartDropdownDisplayed, setCartItems, setTotalPrice, setTotalQuanityInCart } from "./cartDropdown.action";



const CART_INITIAL_STATE : CartState = {
    cartDropdownDisplayed: false,
    cartItems: [],
    totalQuantityInCart: 0,
    totalPrice: 0,

}

export const cartDropdownReducer = (state = CART_INITIAL_STATE, action) => {

    if(setCartDropdownDisplayed.match(action)){
        return {...state, cartDropdownDisplayed: action.payload}
    }
    if(setCartItems.match(action)){
        return {...state, cartItems: action.payload}
    }
    if(setTotalPrice.match(action)){
        return {...state, totalPrice: action.payload}
    }
    if(setTotalQuanityInCart.match(action)){
        return {...state, totalQuantityInCart: action.payload}
    }
    
    return state
}
