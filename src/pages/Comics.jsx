import popLaugh from "../assets/laughing.png";
import "../css/comics.scss";
import axios from "axios";
import { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import ComicCard from "../components/ComicCard";
const Comics = ({ myToken, warning, setWarning, setVisibility }) => {
  const [comics, setComics] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const url = `http://localhost:3000/comics?title=${title}`;
  const fetchComics = async () => {
    const response = await axios.get(url);
    setIsLoading(false);
    setComics(response.data.results);
  };
  try {
    useEffect(() => {
      fetchComics();
    }, [title]);
  } catch (error) {
    console.log(error.response);
  }
  return isLoading ? (
    <h1 className="container">Chargement de la page...</h1>
  ) : (
    <main className="container">
      <SearchBar setSearch={setTitle} />
      {comics.length === 0 ? (
        <h1 className="container">Pas de résultat...</h1>
      ) : (
        <div className="comic-page">
          {comics.map((comic) => {
            return (
              <ComicCard
                key={comic._id}
                myToken={myToken}
                elem={comic}
                warning={warning}
                setWarning={setWarning}
              />
            );
          })}
        </div>
      )}
      <div
        className="popup-div"
        style={{
          transform:
            warning && !myToken
              ? "translate(0px,-400px)"
              : "translate(0px,0px)",
        }}
      >
        <button
          onClick={() => {
            setVisibility([false, true]);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setWarning(false);
          }}
        >
          Fuck OFF
        </button>
        <h1>You are not a subscriber?</h1>
        <img id="pop-up" src={popLaugh} alt="pop-up" />
      </div>
    </main>
  );
};

export default Comics;
