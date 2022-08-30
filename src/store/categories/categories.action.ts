import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";
import {createAction, Action, ActionWithPayload} from "../../utils/reducer/createAction";

import { withMatcher } from "../../utils/reducer/createAction";


export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoriesFail = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, Error>



export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
})

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
})
export const fetchCategoriesFail = withMatcher((error: Error): FetchCategoriesFail => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error)
})
