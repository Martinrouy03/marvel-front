// import joinUs from "../assets/join-us.png";
// import goodJob from "../assets/goodJob.png";
import stopLogo from "../assets/stop.png";
import connect from "../assets/connect.png";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const ModalSignUp = ({ setVisibility, setMyToken }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login/", {
        email: email,
        password: pwd,
      });
      setMyToken(response.data.token);
      Cookies.set("myToken", response.data.token, { expires: 7 });
      setVisibility([false, false]);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div
      className="modal-root"
      onMouseDown={() => {
        setVisibility([false, false]);
      }}
    >
      <div
        className="modal"
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
        onSubmit={(event) => {
          event.preventDefault();
          setErrorMessage("");
          handleSubmit();
        }}
      >
        <form>
          <br />
          <h1>Connect Yourself</h1>
          <div className="input-container">
            <input
              type="email"
              value={email}
              placeholder="blabla@mail.com"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <input
            type="password"
            value={pwd}
            placeholder="Password:"
            onChange={(event) => {
              setPwd(event.target.value);
            }}
          />
          {errorMessage && (
            <h3 style={{ color: "red", display: "center" }}>Unauthorized</h3>
          )}
          <input type="submit" value="Login" />
          <h3
            style={{ color: "lightgreen" }}
            onClick={() => {
              setVisibility([true, false]);
            }}
          >
            Not registered yet?
          </h3>
        </form>
        {errorMessage ? (
          <img
            style={{ height: "350px", objectFit: "contain" }}
            src={stopLogo}
            alt="joinus"
          />
        ) : (
          <img
            style={{ height: "350px", objectFit: "contain" }}
            src={connect}
            alt="joinus"
          />
        )}
      </div>
    </div>
  );
};

export default ModalSignUp;
