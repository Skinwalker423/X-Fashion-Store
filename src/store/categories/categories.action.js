import { CATEGORIES_ACTION_TYPES } from "./categories.types.ts";
import createAction from "../../utils/reducer/createAction";


export const fetchCategoriesStart =() => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
}
export const fetchCategoriesSuccess = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
}
export const fetchCategoriesFail = (error) => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error)
}
