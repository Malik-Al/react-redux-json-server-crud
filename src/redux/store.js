import {createStore, applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import {rootReducer} from "./root-reducer"
import {logger} from "redux-logger/src";

const middlewares = [reduxThunk]

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
