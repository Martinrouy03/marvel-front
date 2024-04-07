import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AddBookmark = ({
  bookmarkObj,
  category,
  myToken,
  setIsOver,
  isOver,
  cardId,
  setWarning,
}) => {
  const sign = [Math.random() > 0.5, Math.random() > 0.5];
  const randX = Math.random() * 50 + 50;
  const randY = Math.random() * 50 + 50;
  const transX = sign[0] ? randX : -randX;
  const transY = sign[1] ? randY : -randY;
  return (
    <div
      className="bookmark-button"
      style={{
        transform:
          !myToken && isOver && bookmarkObj._id === cardId
            ? `translate(${transX}px,${transY}px)`
            : "translate(0px,0px)",
      }}
      onMouseOver={() => {
        setIsOver(!isOver);
        setWarning(1);
      }}
      onClick={() => {
        if (myToken) {
          const storedBookmarks = JSON.parse(localStorage.getItem(category));
          if (storedBookmarks) {
            let notStoredYet = true;
            storedBookmarks.map((bookmark) => {
              if (bookmark._id === bookmarkObj._id) {
                notStoredYet = false;
              }
            });
            if (notStoredYet) {
              storedBookmarks.push(bookmarkObj);
              localStorage.setItem(category, JSON.stringify(storedBookmarks));
              alert("Added to your bookmarks! 😍");
            } else {
              alert(
                "Already in your bookmarks! You definitely love this one 😜"
              );
            }
          } else {
            localStorage.setItem(category, JSON.stringify([bookmarkObj]));
          }
        }
      }}
    >
      <FontAwesomeIcon id="bookmarkIcon" icon="fa-solid fa-bookmark" />
      <span>Add to bookmarks</span>
    </div>
  );
};
export default AddBookmark;
