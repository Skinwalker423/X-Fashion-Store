import createAction from "../../utils/reducer/createAction";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
        return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user );
    }

// export const setCurrentUserStart = (user) => {
//         return createAction(USER_ACTION_TYPES.SET_CURRENT_USER_START, user);
//     }

export const checkUserSession = () => {
    return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
}

export const googleSignInStart = (email, password) => {
    return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, {email, password})
}
export const emailSignInStart = (email, password) => {
    return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password})
}

export const signInSucess = (user) => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
}

export const signInFailed = (error) => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
}
