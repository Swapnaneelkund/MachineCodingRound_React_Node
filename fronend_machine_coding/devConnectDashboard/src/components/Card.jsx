import { useDispatch } from "react-redux";
import { set } from "../Slice/userDataSlice.js";
import { useNavigate } from "react-router-dom";
function Card({ name, email, id,address }) {
  const dispatch = useDispatch();
const navigate = useNavigate();

  return (
    <div
      style={{
        border: "5px",
        background: "white",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
 onClick={() => {
  dispatch(
    set({
      id,
      name,
      email,
    })
  );

  navigate("/userData");
}}
    >
      <h1 style={{ color: "black" }}>{name}</h1>

      <h2 style={{ color: "black" }}>{email}</h2>
    </div>
  );
}

export default Card;