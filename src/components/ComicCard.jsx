import AddBookmark from "../components/AddBookmark";
import { useState } from "react";
const ComicCard = ({ elem, myToken, setWarning, isOver, setIsOver }) => {
  const [cardId, setCardId] = useState("");
  return (
    <article
      className="comic-card"
      onMouseEnter={() => {
        setCardId(elem._id);
      }}
      onMouseLeave={() => {
        setCardId("");
      }}
    >
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
          <AddBookmark
            myToken={myToken}
            bookmarkObj={elem}
            category="comics"
            isOver={isOver}
            setIsOver={setIsOver}
            cardId={cardId}
            setWarning={setWarning}
          />
        </div>
      </div>
    </article>
  );
};
export default ComicCard;
