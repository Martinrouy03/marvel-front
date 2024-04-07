import "../css/characters.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CharacterCard from "../components/CharacterCard";
import NavBar from "../components/NavBar";

const Characters = ({ skip, limit, setLimit, setSkip }) => {
  const [characters, setCharacters] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const fetchCharacters = async () => {
    const response = await axios.get(
      `https://site--marvel-back--nhcf6764t4pv.code.run/characters?limit=${limit}&skip=${skip}&name=${name}`
    );
    setIsLoading(false);
    setCharacters(response.data.results);
    setCount(response.data.count);
  };
  try {
    useEffect(() => {
      fetchCharacters();
    }, [name, limit, skip]);
  } catch (error) {
    console.log(error.response);
  }
  return isLoading ? (
    <h1 className="container">Loading...</h1>
  ) : (
    <main className="container">
      <SearchBar setSearch={setName} />
      <NavBar
        count={count}
        limit={limit}
        setSkip={setSkip}
        setLimit={setLimit}
      />
      {characters.length === 0 ? (
        <h1 className="container">No result...</h1>
      ) : (
        <div className="characters-page">
          {characters.map((character) => {
            return <CharacterCard elem={character} key={character._id} />;
          })}
        </div>
      )}
    </main>
  );
};

export default Characters;
