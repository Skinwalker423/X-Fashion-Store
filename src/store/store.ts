import { createStore, compose, applyMiddleware, Middleware} from "redux";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./root-saga";


export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

type ExtentedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[];
}

const persistConfig: ExtentedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartDropdown']
}

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const middlewares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware ].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
