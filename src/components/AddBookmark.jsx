import { useState } from "react";
const AddBookmark = ({
  bookmarkObj,
  category,
  setWarning,
  myToken,
  setIsOver,
  isOver,
}) => {
  const [bookmarkId, setBookmarkId] = useState("");
  const sign = [Math.random() > 0.5, Math.random() > 0.5];
  const randX = Math.random() * 50 + 50;
  const randY = Math.random() * 50 + 50;
  const transX = sign[0] ? randX : -randX;
  const transY = sign[1] ? randY : -randY;
  // console.log(bookmarkObj._id, bookmarkId);
  console.log(bookmarkObj._id);
  return (
    <button
      className="bookmark-button"
      style={{
        transform:
          !myToken && isOver && bookmarkObj._id === bookmarkId
            ? `translate(${transX}px,${transY}px)`
            : "translate(0px,0px)",
      }}
      onMouseOver={() => {
        console.log(bookmarkObj._id);
        setWarning(1);
        setIsOver(!isOver);
        setBookmarkId(bookmarkObj._id);
      }}
      onClick={() => {
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
            alert("Already in your bookmarks! You definitely love this one 😜");
          }
        } else {
          localStorage.setItem(category, JSON.stringify([bookmarkObj]));
        }
      }}
    >
      Ajouter aux Favoris
    </button>
  );
};
export default AddBookmark;
