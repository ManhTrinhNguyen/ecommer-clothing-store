import { compose, applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
//import thunk from "redux-thunk";

// Custom Middleware
// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action)
//   }

//   console.log("type: ", action.type)
//   console.log("payload: ", action.payload)
//   console.log("currentState: ", store.getState());

//   next(action);

//   console.log("nextState: ", store.getState())
// }

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  blacklist: ["user"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Logger help us see what the State look like before and after dispact
// Middle is library help run before action hit reducer
const middleWares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean)

const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancers)
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)