import { CATEGORIES_ACTION_TYPES } from "./categories.types.ts";

const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
}

const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES : 
            return {...state, categories: payload}
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS : 
            return {...state, categories: payload, isLoading: false}
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START : 
            return {...state, isLoading: true}
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL : 
            return {...state, error: payload, isLoading: false}
        default :
            return state;
    }
}

export default categoriesReducer;
