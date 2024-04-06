import comfortZone from "../assets/resting.png";
import warningPic from "../assets/comeOn.png";
import noToken from "../assets/stop3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { useState } from "react";
const Bookmark = (myToken) => {
  const [charactersData, setCharactersData] = useState(
    localStorage.getItem("characters") &&
      JSON.parse(localStorage.getItem("characters"))
  );
  const [comicsData, setComicsData] = useState(
    localStorage.getItem("comics") && JSON.parse(localStorage.getItem("comics"))
  );
  return myToken.myToken ? (
    charactersData.length > 0 || comicsData.length > 0 ? (
      <main className="container">
        <div className="img-container">
          <h1>Welcome to your comfort zone</h1>
          <img id="resting" src={comfortZone} alt="resting" />
        </div>
        {charactersData.length > 0 && (
          <>
            <h1>Your favorite characters:</h1>
            <section className="preferredCharacters">
              {charactersData.map((elem, index) => {
                return (
                  <div key={elem._id} className="character-card">
                    <Link to={"/comics/" + elem._id}>
                      <img
                        src={
                          elem.thumbnail.path +
                          "/portrait_xlarge." +
                          elem.thumbnail.extension
                        }
                        alt=""
                      />
                    </Link>
                    <h2>{elem.name}</h2>
                    <div
                      className="suppress"
                      onClick={(event) => {
                        event.stopPropagation();
                        const newData = [...charactersData];
                        newData.splice(index, 1);
                        localStorage.setItem(
                          "characters",
                          JSON.stringify(newData)
                        );
                        setCharactersData(newData);
                      }}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-xmark" />
                    </div>
                  </div>
                );
              })}
            </section>
          </>
        )}
        <br />
        <br />
        {comicsData.length > 0 && (
          <section className="comic-page">
            <h1>Your favorite comics:</h1>
            {comicsData.map((elem, index) => {
              return (
                <article key={elem._id} className="comic-card">
                  <img
                    src={
                      elem.thumbnail.path +
                      "/standard_fantastic." +
                      elem.thumbnail.extension
                    }
                    alt=""
                  />
                  <div className="details">
                    <div className="details-container">
                      <h2>{elem.title}</h2>
                      <p>{elem.description}</p>
                    </div>
                    <div
                      className="suppress"
                      onClick={() => {
                        const newData = [...comicsData];
                        newData.splice(index, 1);
                        localStorage.setItem("comics", JSON.stringify(newData));
                        setComicsData(newData);
                      }}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-xmark" />
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </main>
    ) : (
      <main className="container nobookmark">
        <div>
          <h1>No bookmark??</h1>
          <br />
          <h1>What the Hell</h1>
          <br />
          <h1>are you doing??</h1>
        </div>

        <img src={warningPic} alt="comeOn" />
      </main>
    )
  ) : (
    <div className="warning-token">
      <h1>Only for subscribers!</h1>
      <img src={noToken} alt="" />
    </div>
  );
};

export default Bookmark;
