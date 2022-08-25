import { signInFailed, signUpAndSignInFailed, signUpAndSignInSuccess, userLogOutFailed } from "./user.action";
import { UserData } from "../../utils/firebase/firebase-utils";
import { AnyAction } from "redux";
import { signInSuccess } from "./user.action";

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const USER_INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null,
}

const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {

    if(signInSuccess.match(action)){
        return {...state, currentUser: action.payload}
    }
    if(signInFailed.match(action) || userLogOutFailed.match(action) || signUpAndSignInFailed.match(action)){
        return {...state, error: action.payload}
    }
    if(signUpAndSignInSuccess.match(action)){
        return {...state, ...action.payload}
    }
    

    return state;
    
}

export default userReducer;
