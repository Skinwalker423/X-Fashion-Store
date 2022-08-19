import {createAction} from "../../utils/reducer/createAction.ts";
import { CURRENT_PATH_ACTION_TYPES } from "./currentPath.types";

export const setCurrentPath = (pathname) => {
    return createAction(CURRENT_PATH_ACTION_TYPES.SET_CURRENT_PATH, pathname)
}