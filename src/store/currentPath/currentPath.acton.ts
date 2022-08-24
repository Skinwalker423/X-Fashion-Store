import {createAction} from "../../utils/reducer/createAction";
import { CURRENT_PATH_ACTION_TYPES } from "./currentPath.types";
import { ActionWithPayload } from "../../utils/reducer/createAction";
import { withMatcher } from "../../utils/reducer/createAction";

export type SetCurrentPath = ActionWithPayload<CURRENT_PATH_ACTION_TYPES.SET_CURRENT_PATH, string>

export const setCurrentPath = withMatcher((pathname: string): SetCurrentPath => {
    return createAction(CURRENT_PATH_ACTION_TYPES.SET_CURRENT_PATH, pathname)
})