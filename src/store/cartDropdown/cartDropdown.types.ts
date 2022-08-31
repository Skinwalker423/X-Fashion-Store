import {CategoryItem} from '../categories/categories.types';

export enum ACTION_TYPES {
    SET_CARTDROPDOWN_DISPLAY = 'SET_CARTDROPDOWN_DISPLAY',
    SET_CART_ITEMS = 'SET_CART_ITEMS',
    SET_TOTAL_QTY = 'SET_TOTAL_QTY',
    SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'
}

export type CartItem = CategoryItem & {
    qty: number;
}



