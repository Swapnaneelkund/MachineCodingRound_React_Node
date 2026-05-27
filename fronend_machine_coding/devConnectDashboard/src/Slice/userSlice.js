import {createSlice} from "@reduxjs/toolkit";
import { data } from "react-router-dom";
const initialState=[]
const slice=createSlice({
    name:"user",
    initialState,
    reducers:{
        add:(state,action)=>{
            const obj={
                name:action.payload.name,
                data:action.payload.data,
                id:crypto.randomUUID()

            }
            state.push(obj)
        },
        delete1:(state,action)=>{
            return state.filter((ele)=>ele!=action.payload)
        }
    }
})
export default slice.reducer;
export const {add,delete1} =slice.actions;