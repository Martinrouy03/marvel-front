import WarningPopUp from "../components/WarningPopUp";
import "../css/comics.scss";
import axios from "axios";
import { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import ComicCard from "../components/ComicCard";
import NavBar from "../components/NavBar";

const Comics = ({
  limit,
  setLimit,
  skip,
  setSkip,
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
  const [count, setCount] = useState(0);
  const url = `http://localhost:3000/comics?limit=${limit}&skip=${skip}&title=${title}`;
  const fetchComics = async () => {
    const response = await axios.get(url);
    setIsLoading(false);
    setComics(response.data.results);
    setCount(response.data.count);
  };
  try {
    useEffect(() => {
      fetchComics();
    }, [title, limit, skip]);
  } catch (error) {
    console.log(error.response);
  }
  return isLoading ? (
    <h1 className="container">Loading...</h1>
  ) : (
    <main className="container">
      <SearchBar setSearch={setTitle} />
      <NavBar
        count={count}
        limit={limit}
        setSkip={setSkip}
        setLimit={setLimit}
      />
      {comics.length === 0 ? (
        <h1 className="container">No result...</h1>
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
