import { Category } from "./categories.types";
import { fetchCategoriesFail, fetchCategoriesStart, fetchCategoriesSuccess } from "./categories.action";
import { AnyAction } from "redux";


export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null
}

const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action: AnyAction): CategoriesState => {

    if(fetchCategoriesStart.match(action)) {
        return {...state, isLoading: true}
    }

    if(fetchCategoriesSuccess.match(action)) {
        return {...state, categories: action.payload, isLoading: false}
    }

    if(fetchCategoriesFail.match(action)) {
        return {...state, error: action.payload, isLoading: false}
    }

    return state;

}

export default categoriesReducer;
