import { useContext } from "react";
import { usercontext } from "../context/userContext.js";
function ConsumeContext(){
   const {user,setuser}=useContext(usercontext);
}