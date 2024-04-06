import AddBookmark from "../components/AddBookmark";
const ComicCard = ({
  elem,
  myToken,
  warning,
  setWarning,
  isOver,
  setIsOver,
}) => {
  return (
    <article className="comic-card">
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
            setWarning={setWarning}
            category="comics"
            warning={warning}
            isOver={isOver}
            setIsOver={setIsOver}
          />
        </div>
      </div>
    </article>
  );
};
export default ComicCard;
