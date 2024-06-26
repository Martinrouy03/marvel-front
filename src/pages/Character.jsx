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
  const [cardId, setCardId] = useState("");
  const [charComics, setCharComics] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const url =
    "https://site--marvel-back--nhcf6764t4pv.code.run/comics/" + characterId;
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
      <div
        className="hero"
        onMouseEnter={() => {
          setCardId(charComics._id);
        }}
        onMouseLeave={() => {
          setCardId("");
        }}
      >
        <h2 style={{ textAlign: "right" }}>
          {`Find out more about ${charComics.name}'s adventures here 👉`}
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
          cardId={cardId}
        />
      </div>
      <div className="comic-page">
        {charComics.comics.map((comic) => {
          return (
            <ComicCard
              key={comic._id}
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
