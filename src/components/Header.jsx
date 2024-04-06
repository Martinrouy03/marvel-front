import "../css/header.scss";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ setVisibility, myToken, setMyToken }) => {
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
            <button>Characters</button>
          </Link>
          <Link to="/comics/">
            <button>Comics</button>
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
