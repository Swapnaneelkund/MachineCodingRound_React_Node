import Card from "./Card.jsx"
import Adduser from "./Adduser.jsx"
import Navbar from "./Navbar.jsx"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
function Homepage(){
   const data=useSelector(state=>state.user);
   const data1=useSelector(state=>state.data)
   console.log(data1)
    return (
        <div>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        {data.length>0?data.map((ele)=><Card name={ele.name} email={ele.data.email} key={ele.id} address={ele.data.address}/>):<div style={{color:"white"}}>no data</div>}
        </div>
        <div style={{top:0,right:0,position:"fixed",width:"300px",height:"100vh",backgroundColor:"white",transition:"0.5s ease",transform:data1.open?"translateX(0)":"translateX(100%)"}}>
        <Outlet/>
        </div>
        </div>
    )
}
export default Homepage;