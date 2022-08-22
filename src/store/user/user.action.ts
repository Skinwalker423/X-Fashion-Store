import {createAction, Action, ActionWithPayload} from "../../utils/reducer/createAction";
import { USER_ACTION_TYPES, User } from "./user.types";
import { withMatcher } from "../../utils/reducer/createAction";
import { Sign } from "crypto";


export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, User>

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>

export type GoogleSignInStart = ActionWithPayload<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, {email: string, password: string} >

export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email: string, password: string} >

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, User>

export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>

export type CreateUserStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, {displayName: string, email: string, password: string} >

export type SignUpAndSignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user: User, additionalDetails: {}}>

export type SignUpAndSignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>

export type UserLogOutStart = Action<USER_ACTION_TYPES.SET_LOG_OUT_START>

export type UserLogOutSuccess = Action<USER_ACTION_TYPES.SET_LOG_OUT_SUCCESS>

export type UserLogOutFailed = ActionWithPayload<USER_ACTION_TYPES.SET_LOG_OUT_FAILED, Error>



export const setCurrentUser = withMatcher((user: User) : SetCurrentUser => {
        return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user );
    })

export const checkUserSession = withMatcher((): CheckUserSession => {
    return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
})

export const googleSignInStart = withMatcher((email: string, password: string): GoogleSignInStart => {
    return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, {email, password})
})

export const emailSignInStart = withMatcher((email: string, password: string): EmailSignInStart => {
    return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password})
})

export const signInSucess = withMatcher((user: User): SignInSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
})

export const signInFailed = withMatcher((error: Error): SignInFailed => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
})

export const createUserStart = withMatcher((displayName: string, email: string, password: string): CreateUserStart => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_START, {displayName, email, password})
})

export const signUpAndSignInSuccess = withMatcher((user: User, additionalDetails: {}): SignUpAndSignInSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalDetails})
})

export const signUpAndSignInFailed = withMatcher((error: Error): SignUpAndSignInFailed => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
})

export const userLogOutStart = withMatcher((): UserLogOutStart => {
    return createAction(USER_ACTION_TYPES.SET_LOG_OUT_START)
})
export const userLogOutSuccess = withMatcher((): UserLogOutSuccess => {
    return createAction(USER_ACTION_TYPES.SET_LOG_OUT_SUCCESS)
})
export const userLogOutFailed = withMatcher((error: Error): UserLogOutFailed => {
    return createAction(USER_ACTION_TYPES.SET_LOG_OUT_FAILED, error)
})


