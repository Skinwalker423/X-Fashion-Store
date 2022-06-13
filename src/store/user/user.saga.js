import { call, all, takeLatest, put } from "redux-saga/effects";
import { createUserDocumentFromAuth, onAuthStateChangedListener, getCurrentUser } from "../../utils/firebase/firebase-utils";
import { USER_ACTION_TYPES } from "./user.types";
import { setCurrentUser, signInSucess, signInFailed } from "./user.action";


export function* createSnapshotFromUserAuth(userAuth, additionalDetails){
    try{
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        console.log(userSnapshot);
        console.log(userSnapshot.data);

    }catch(error){
        yield put(signInFailed);
        console.log('problem creating user', error.message);
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield call(getCurrentUser);
        if(userAuth){
            return;
        }
    }catch(error){
        yield put(signInFailed(error))
    }
}

export function* emailSignInUserAsync(){
    // const user = yield call(signInAuthUserWithEmailAndPassword, auth, email, password );
}


export function* googleSignInUserAsync(){
    try{
        const user = yield call(getCurrentUser);
        yield put(signInSucess(user));
    }catch(error){
        yield put(signInFailed(error))
    }
}

export function* onEmailSignIn(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, emailSignInUserAsync)
}
export function* onGoogleSignIn(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, googleSignInUserAsync)
}


export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated )
}

export function* onSetCurrentUser(){
    yield takeLatest(USER_ACTION_TYPES.SET_CURRENT_USER, isUserAuthenticated )
}


export function* userSaga(){
    yield all([onSetCurrentUser, onCheckUserSession]);
}