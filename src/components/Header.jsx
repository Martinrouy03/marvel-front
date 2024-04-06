import "../css/header.scss";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

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
          <Link to="/characters">
            <button
              onClick={() => {
                resetFunc();
              }}
            >
              Characters
            </button>
          </Link>
          <Link to="/comics/">
            <button
              onClick={() => {
                resetFunc();
              }}
            >
              Comics
            </button>
          </Link>
          <Link to="/bookmark">
            <button>Bookmarks</button>
          </Link>
        </section>
        {myToken ? (
          <button
            id="logout"
            onClick={() => {
              setMyToken("");
              Cookies.remove("myToken");
              setWarning(false);
              setIsOver(false);
            }}
          >
            Logout
          </button>
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
      </div>
    </header>
  );
};

export default Header;
