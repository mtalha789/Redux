import { applyMiddleware } from "@reduxjs/toolkit";
import reducers from './reducers/index';
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit'

export const store=configureStore({reducer:reducers},{},applyMiddleware(thunk))
// export const store=configureStore({reducer:reducers})