import rootSlice from "./rootSlice";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit"

const reducers = combineReducers({
    root:rootSlice
});

const store = configureStore({
    reducer: reducers,
})

export default store;