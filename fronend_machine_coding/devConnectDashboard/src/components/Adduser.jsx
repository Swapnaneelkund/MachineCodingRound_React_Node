import { useEffect, useRef } from "react";
import { add } from "../Slice/userSlice.js";
import { useDispatch } from "react-redux";

function Adduser() {

  const buttonref = useRef(null);
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {

    const button = buttonref.current;

    async function handleClick(e) {

      e.preventDefault();

      const name = inputRef.current.value;

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?name=${name}`
      );

      const data = await response.json();

      if (data.length > 0) {

        dispatch(add({
          name: name,

          data: {
            email: data[0].email,
            address: data[0].address
          }
        }));

      } else {
        console.log("User not found");
      }
    }

    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };

  }, []);

  return (
    <form>
      <h2>Add User</h2>

      <input
        ref={inputRef}
        type="text"
        name="Name"
        style={{ border: "1px solid white" }}
      />

      <button
        ref={buttonref}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Adduser;