import { USER_ACTION_TYPES } from "./user.types";
import { signInFailed, signInSuccess, checkUserSession, createUserStart, emailSignInStart, googleSignInStart, setCurrentUser, signUpAndSignInFailed, signUpAndSignInSuccess, userLogOutFailed, userLogOutStart, userLogOutSuccess } from "./user.action";
import { UserData } from "../../utils/firebase/firebase-utils";
import { AnyAction } from "redux";

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const USER_INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}

const userReducer = (state = USER_INITIAL_STATE, action = {} as AnyAction): UserState => {

    if(signInSuccess.match(action)){
        return {...state, currentUser: action.payload}
    }
    if(signInFailed.match(action)){
        return {...state, error: action.payload}
    }
    if(userLogOutSuccess.match(action)){
        return {...state, currentUser: null}
    }
    if(signUpAndSignInSuccess.match(action)){
        return {...state, ...action.payload}
    }
    if(signUpAndSignInFailed.match(action)){
        return {...state, error: action.payload}
    }

    return state;

    // switch(type) {
        
    //     case USER_ACTION_TYPES.SIGN_IN_SUCCESS : 
    //         return {...state, currentUser: payload}
    //     case USER_ACTION_TYPES.SIGN_IN_FAILED : 
    //         return {...state, error: payload}
    //     case USER_ACTION_TYPES.SET_LOG_OUT_SUCCESS : 
    //         return {...state, currentUser: null}
    //     case USER_ACTION_TYPES.SIGN_UP_START : 
    //         return {...state, ...payload}
    //     case USER_ACTION_TYPES.SIGN_UP_FAILED : 
    //         return {...state, error: payload}
    //     default :
    
}

export default userReducer;
