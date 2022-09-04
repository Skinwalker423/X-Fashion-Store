import { signInFailed, signUpAndSignInFailed, signUpAndSignInSuccess, userLogOutFailed, userLogOutStart } from "./user.actions";
import { AnyAction } from "redux";
import { User } from "firebase/auth";
import { UserData } from "../../utils/firebase/firebase-utils";

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

const userReducer = (state = USER_INITIAL_STATE, action: AnyAction): UserState => {

    // if(signInSuccess.match(action)){
    //     return {...state, currentUser: action.payload}
    // }
    if(signInFailed.match(action) || userLogOutFailed.match(action) || signUpAndSignInFailed.match(action)){
        return {...state, error: action.payload}
    }
    if(signUpAndSignInSuccess.match(action)){
        return {...state, ...action.payload}
    }
    if(userLogOutStart.match(action)){
        return {...state, currentUser: null}
    }
    

    return state;
    
}

export default userReducer;
