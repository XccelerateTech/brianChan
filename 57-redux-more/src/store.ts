import { createStore, applyMiddleware } from "redux";// add `applyMiddleware` import
import logger from 'redux-logger' // add `redux-logger` import 
import {rootReducer} from "./reducers"

export const store = createStore<any, any, any, any>(rootReducer,
    applyMiddleware(logger)
);

