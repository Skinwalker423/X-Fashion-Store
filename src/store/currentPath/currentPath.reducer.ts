import { setCurrentPath } from "./currentPath.acton";
import { AnyAction } from "redux";

export type CurrentPathState = {
    readonly currentPath: string;
}

const CURRENT_PATH_INITIAL_STATE: CurrentPathState = {
    currentPath: '/'
}

export const currentPathReducer = (state = CURRENT_PATH_INITIAL_STATE, action: AnyAction) => {

    if(setCurrentPath.match(action)){
        return {currentPath: action.payload}
    }

    return state;
}