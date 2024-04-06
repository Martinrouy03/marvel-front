import "../css/characters.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CharacterCard from "../components/CharacterCard";
const Characters = ({}) => {
  const [characters, setCharacters] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const fetchCharacters = async () => {
    const response = await axios.get(
      `http://localhost:3000/characters?name=${name}`
    );
    setIsLoading(false);
    setCharacters(response.data.results);
  };
  try {
    useEffect(() => {
      fetchCharacters();
    }, [name]);
  } catch (error) {
    console.log(error.response);
  }
  return isLoading ? (
    <h1 className="container">Chargement de la page...</h1>
  ) : (
    <main className="container">
      <SearchBar setSearch={setName} />
      {characters.length === 0 ? (
        <h1 className="container">Pas de résultat...</h1>
      ) : (
        <div className="characters-page">
          {characters.map((character) => {
            return <CharacterCard elem={character} />;
          })}
        </div>
      )}
    </main>
  );
};

export default Characters;
