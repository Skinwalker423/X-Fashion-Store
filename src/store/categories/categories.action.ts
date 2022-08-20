import { CATEGORIES_ACTION_TYPES, Category, Error } from "./categories.types";
import {createAction, Action, ActionWithPayload} from "../../utils/reducer/createAction";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type errorProps = {
    error: Error;
}
export type CategoriesArrayProps = {
    categoriesArray: Category[]
}
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, CategoriesArrayProps>

export type FetchCategoriesFail = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, errorProps>

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFail;



export const fetchCategoriesStart =() : FetchCategoriesStart => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
}
export const fetchCategoriesSuccess = (categoriesArray : CategoriesArrayProps) : FetchCategoriesSuccess => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
}
export const fetchCategoriesFail = (error: errorProps) : FetchCategoriesFail => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error)
}
