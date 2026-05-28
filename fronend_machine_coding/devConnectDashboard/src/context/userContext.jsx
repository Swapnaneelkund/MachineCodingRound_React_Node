import {createContext, useState} from "react"
export const usercontext=createContext();
export const userprovider=({children})=>{
    const[user,setuser]=useState([]);
    return (
        <usercontext.Provider value={{user,setuser}}>
            {children}
        </usercontext.Provider>
    )
}