import { call, all, takeLatest, put } from "typed-redux-saga/macro";
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword, getCurrentUser, signInWithGooglePopup, signInAuthUserWithEmailAndPassword,signOutUser, AdditionalInformation } from "../../utils/firebase/firebase-utils";
import { User } from "firebase/auth";
import { USER_ACTION_TYPES } from "./user.types";
import {signInFailed, signUpAndSignInSuccess, signUpAndSignInFailed, userLogOutSuccess, userLogOutFailed, EmailSignInStart, SignUpAndSignInSuccess, CreateUserStart } from "./user.action";


export function* createSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInformation){
    try{
        const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);
        if(userSnapshot){
            // yield* put(signInSuccess({...userSnapshot.data(), id: userSnapshot.id}));
            console.log(userSnapshot.data());
        }
    }catch(error){
        yield* put(signInFailed);
        console.log('problem creating user', error);
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield* call(getCurrentUser);
        if(!userAuth){
            return;
        }
        yield* call(createSnapshotFromUserAuth, userAuth);
    }catch(error){
        yield* put(signInFailed(error as Error))
    }
}


export function* emailSignInUserAsync({payload: {email, password}}: EmailSignInStart){

    try{
        const userCredential = yield* call(signInAuthUserWithEmailAndPassword, email, password);
        if(userCredential){
            const {user} = userCredential;
            console.log('this is for user info: ',user);
            yield* call(createSnapshotFromUserAuth, user);
        }

    }catch(error){
        yield* put(signInFailed(error as Error))
    }
}


export function* googleSignInUserAsync() {
    try{
        const userCredential = yield* call(signInWithGooglePopup);
        if(userCredential){
            const {user} = userCredential;
            yield* call(createSnapshotFromUserAuth, user);
        }
    }catch(error){
        yield* put(signInFailed(error as Error));
    }
}

export function* logOutUser(){
    try{
        yield* call(signOutUser);
        yield* put(userLogOutSuccess());
        

    }catch(error){
        yield* put(userLogOutFailed(error as Error))
    }
}

export function* signInAfterSignUp({payload: {user, additionalDetails}}: SignUpAndSignInSuccess){   
    yield* call(createSnapshotFromUserAuth, user, additionalDetails)
}

export function* createUserWithEmailPassword({payload: {email, password, displayName}}: CreateUserStart){

        try {
            const userCredential = yield* call(createAuthUserWithEmailAndPassword, email, password);
            if(userCredential){
                const {user} = userCredential;
                yield* put(signUpAndSignInSuccess(user, {displayName}));
            }

        } catch (error) {
           yield* put(signUpAndSignInFailed(error as Error));
        }
}

export function* onEmailSignIn(){
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, emailSignInUserAsync)
}
export function* onGoogleSignIn(){
    yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, googleSignInUserAsync)
}


export function* onCheckUserSession(){
    yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated )
}

export function* onUserLogOutStart(){
    yield* takeLatest(USER_ACTION_TYPES.SET_LOG_OUT_START, logOutUser )
}

export function* onSignUpFormSubmit(){
    yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, createUserWithEmailPassword)
}

export function* onSignUpSuccess(){
    yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}


export function* userSaga(){
    yield* all([call(onCheckUserSession), call(onGoogleSignIn), call(onEmailSignIn), call(onUserLogOutStart), call(onSignUpFormSubmit), call(onSignUpSuccess)]);
}