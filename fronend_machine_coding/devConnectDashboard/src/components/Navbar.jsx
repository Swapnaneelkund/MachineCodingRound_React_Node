import {NavLink} from "react-router-dom"
function Navbar(){
    return (
      <div style={{display:"flex",gap:"40px"}}>
        <NavLink to="/addUser">Adduser</NavLink>
        <NavLink to="/">Home</NavLink>
      </div>
    )
}
export default Navbar;