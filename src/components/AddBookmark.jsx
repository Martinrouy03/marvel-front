import { useState } from "react";

const AddBookmark = ({ bookmarkObj, category, setWarning, myToken }) => {
  const [isOver, setIsOver] = useState(false);

  const sign = [Math.random() > 0.5, Math.random() > 0.5];
  const transX = sign[0] ? Math.random() * 50 + 50 : -(Math.random() * 50 + 50);
  const transY = sign[1] ? Math.random() * 50 + 50 : -(Math.random() * 50 + 50);
  return (
    <button
      className="bookmark-button"
      style={{
        transform:
          isOver && !myToken
            ? `translate(${transX}px,${transY}px)`
            : "translate(0px,0px)",
      }}
      onMouseOver={() => {
        setWarning(1);
        setIsOver(!isOver);
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
