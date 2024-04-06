import allChars from "../assets/marvels_chars.png";
import "../css/welcome.scss";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main className="container home">
      <h1>Ready to delve into Marvel Universe ?</h1>
      <Link to="/characters">
        <img src={allChars} alt="all characters" />
      </Link>
    </main>
  );
};

export default Welcome;
