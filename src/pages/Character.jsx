import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddBookmark from "../components/AddBookmark";
import ComicCard from "../components/ComicCard";
import WarningPopUp from "../components/WarningPopUp";
import "../css/character.scss";

const Character = ({
  myToken,
  warning,
  setWarning,
  isOver,
  setIsOver,
  setVisibility,
}) => {
  const { characterId } = useParams();
  const [charComics, setCharComics] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://localhost:3000/comics/" + characterId;
  const fetchCharComics = async () => {
    const response = await axios.get(url);
    setIsLoading(false);
    setCharComics(response.data);
  };
  try {
    useEffect(() => {
      fetchCharComics();
    }, []);
  } catch (error) {
    console.log(error.response);
  }
  return isLoading ? (
    <h1 className="container">Chargement de la page...</h1>
  ) : (
    <main className="container character-page">
      <div className="hero">
        <h2 style={{ textAlign: "right" }}>
          {`Retrouve les aventures de ${charComics.name} dans les comics suivants:`}{" "}
          👉{" "}
        </h2>
        <img
          src={
            charComics.thumbnail.path +
            "/portrait_uncanny." +
            charComics.thumbnail.extension
          }
          alt=""
        />
        <h1>{charComics.name}</h1>
        <AddBookmark
          myToken={myToken}
          bookmarkObj={charComics}
          isOver={isOver}
          setIsOver={setIsOver}
          setWarning={setWarning}
          category="characters"
        />
      </div>
      <div className="comic-page">
        {charComics.comics.map((comic) => {
          return (
            <ComicCard
              myToken={myToken}
              elem={comic}
              setWarning={setWarning}
              isOver={isOver}
              setIsOver={setIsOver}
            />
          );
        })}
      </div>
      <WarningPopUp
        myToken={myToken}
        warning={warning}
        setWarning={setWarning}
        setIsOver={setIsOver}
        setVisibility={setVisibility}
      />
    </main>
  );
};

export default Character;
