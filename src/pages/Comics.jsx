import WarningPopUp from "../components/WarningPopUp";
import "../css/comics.scss";
import axios from "axios";
import { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import ComicCard from "../components/ComicCard";
const Comics = ({
  myToken,
  warning,
  setWarning,
  setIsOver,
  isOver,
  setVisibility,
}) => {
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
                isOver={isOver}
                setIsOver={setIsOver}
              />
            );
          })}
        </div>
      )}
      <WarningPopUp
        warning={warning}
        setWarning={setWarning}
        myToken={myToken}
        setIsOver={setIsOver}
        setVisibility={setVisibility}
      />
    </main>
  );
};

export default Comics;
