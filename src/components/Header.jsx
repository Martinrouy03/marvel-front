import "../css/header.scss";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({
  setVisibility,
  myToken,
  setMyToken,
  setLimit,
  setSkip,
  setWarning,
}) => {
  const resetFunc = () => {
    setLimit(100);
    setSkip([1, 10]);
    setWarning(0);
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
            alt="logo"
          />
        </Link>
        <section className="page-buttons">
          <Link
            to="/characters"
            onClick={() => {
              resetFunc();
            }}
          >
            <div>
              <FontAwesomeIcon
                icon="fa-solid fa-person-walking"
                style={{ color: "black" }}
              />
              <span>Characters</span>
            </div>
          </Link>
          <Link
            to="/comics/"
            onClick={() => {
              resetFunc();
            }}
          >
            <div>
              <FontAwesomeIcon
                icon="fa-solid fa-book"
                style={{ color: "black" }}
              />
              <span>Comics</span>
            </div>
          </Link>
          <Link to="/bookmark">
            <div>
              <FontAwesomeIcon
                icon="fa-solid fa-bookmark"
                style={{ color: "black" }}
              />
              <span>Bookmarks</span>
            </div>
          </Link>
        </section>
        <section className="page-buttons">
          {myToken ? (
            <div
              onClick={() => {
                setMyToken("");
                Cookies.remove("myToken");
                setWarning(false);
                setIsOver(false);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-door-open" />
              <span>Logout</span>
            </div>
          ) : (
            <section className="modal-buttons">
              <button
                onClick={() => {
                  setVisibility([true, false]);
                }}
              >
                Subscribe
              </button>
              <button
                onClick={() => {
                  setVisibility([false, true]);
                }}
              >
                Login
              </button>
            </section>
          )}
        </section>
      </div>
    </header>
  );
};

export default Header;
