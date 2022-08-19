import { AnyAction } from "redux";

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

export type Action<T> = {
    type: T;
}

function createAction<T extends string, P>(type: T, payload: P) : ActionWithPayload<T,P>;

function createAction<T extends string>(type: T, payload: void) : Action<T>;

function createAction<T extends string, P>(type: T, payload: P) {
    return {type, payload};
}

