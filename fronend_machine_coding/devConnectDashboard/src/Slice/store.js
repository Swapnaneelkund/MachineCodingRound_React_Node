import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import dataReducer from "./userDataSlice.js"
const store=configureStore({
    reducer:{
        user:userReducer,
        data:dataReducer
    }
})
export  default store;