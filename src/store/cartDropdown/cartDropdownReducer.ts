import { ACTION_TYPES, CartItem } from "./cartDropdown.types";
import { AnyAction } from "redux";
import { setCartDropdownDisplayed, setCartItems, setTotalPrice, setTotalQuanityInCart } from "./cartDropdown.action";

export type InitialState = {
    readonly cartDropdownDisplayed: boolean;
    readonly cartItems: CartItem[];
    readonly totalQuantityInCart: number;
    readonly totalPrice: number;

}

const INITIAL_STATE : InitialState = {
    cartDropdownDisplayed: false,
    cartItems: [],
    totalQuantityInCart: 0,
    totalPrice: 0,

}

export const cartDropdownReducer = (state = INITIAL_STATE, action = {} as AnyAction) : InitialState => {

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
