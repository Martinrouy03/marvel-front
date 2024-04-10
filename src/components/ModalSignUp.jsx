import joinUs from "../assets/join-us.png";
import goodJob from "../assets/goodJob.png";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const ModalSignUp = ({ setVisibility, setMyToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [status, setStatus] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://site--marvel-back--nhcf6764t4pv.code.run/signup/",
        {
          username: username,
          email: email,
          password: pwd,
        }
      );
      setMyToken(response.data.token);
      Cookies.set("myToken", response.data.token, { expires: 7 });
      setIsSubmitted(true);
    } catch (error) {
      setStatus(error.response.status);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div
      className="modal-root"
      onMouseDown={() => {
        setVisibility([false, false]);
      }}
    >
      {isSubmitted ? (
        <div
          className="modal"
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
          style={{ justifyContent: "space-between" }}
        >
          <h1 style={{ marginTop: "30px", color: "green" }}>
            You are one of us...
          </h1>
          <button
            id="start"
            onClick={() => {
              setVisibility([false, false]);
            }}
          >
            Start Exploring!
          </button>
          <img src={goodJob} alt="" />
        </div>
      ) : (
        <div
          className="modal"
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
          onSubmit={(event) => {
            setStatus("");
            event.preventDefault();
            handleSubmit();
          }}
        >
          <form>
            <br />
            <h1>Join us!</h1>
            <div className="input-container">
              <input
                type="text"
                value={username}
                placeholder="Username:"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              {status === 400 && (
                <p style={{ color: "red" }}>Username missing!</p>
              )}
            </div>
            <div className="input-container">
              <input
                type="email"
                value={email}
                placeholder="blabla@mail.com"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              {status === 409 && (
                <p style={{ color: "red" }}>This email already exists!</p>
              )}
            </div>
            <input
              type="password"
              value={pwd}
              placeholder="Password:"
              onChange={(event) => {
                setPwd(event.target.value);
              }}
            />
            <div className="checkbox-container">
              <input
                type="checkbox"
                onChange={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <span>Ready to become an addict?</span>
              <p>
                By clicking this, we decline all responsibilities if your wife,
                your child, or your pet want to kick you out of home.
              </p>
            </div>
            {status !== 400 && status !== 409 && (
              <p style={{ color: "red" }}>{errorMessage}</p>
            )}
            <input
              type="submit"
              value="Submit!"
              style={{
                backgroundColor: isChecked ? "green" : "gray",
                color: isChecked ? "white" : "black",
              }}
              disabled={isChecked ? "" : "disabled"}
            />
            <h3
              style={{ color: "lightgreen" }}
              onClick={() => {
                setVisibility([false, true]);
              }}
            >
              Already registered?
            </h3>
          </form>
          <img src={joinUs} alt="joinus" />
        </div>
      )}
    </div>
  );
};

export default ModalSignUp;
