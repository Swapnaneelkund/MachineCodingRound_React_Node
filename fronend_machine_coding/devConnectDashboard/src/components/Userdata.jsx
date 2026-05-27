import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { close } from "../Slice/userDataSlice.js";
function Userdata({}){
    const dispatch=useDispatch();
    const data=useSelector(state=>state.data);
    console.log("userdata")
    console.log(data)

    return (
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }}
>
  <div>
    <div>{data?.data?.name}</div>
    <div>{data?.data?.email}</div>
    <div>{data?.data?.address}</div>
  </div>

  <span
    style={{ color: "red", cursor: "pointer" }}
    onClick={() => dispatch(close())}
  >
    X
  </span>
</div>
    )

}
export default Userdata;