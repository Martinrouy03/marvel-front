import { useState } from "react";
import "../css/navbar.scss";
const NavBar = ({ count, limit, setSkip, setLimit }) => {
  const [stopNb, setStopNb] = useState([1, 10]);
  const pageNb = Math.ceil(count / limit);
  const pagesLoop = (nb) => {
    const pageButtons = [];
    for (let i = 1; i <= nb; i++) {
      pageButtons.push(
        <button
          style={{ display: i > stopNb[1] || i < stopNb[0] ? "none" : "unset" }}
          key={i}
          onClick={() => {
            setSkip(limit * (i - 1));
          }}
        >
          {i}
        </button>
      );
    }
    pageNb > stopNb[1] &&
      pageButtons.push(
        <button
          onClick={() => {
            const newStopNb = [...stopNb];
            newStopNb[0] = newStopNb[0] + 10;
            newStopNb[1] = newStopNb[1] + 10;
            setStopNb(newStopNb);
            setSkip((newStopNb[0] - 1) * limit);
          }}
        >
          &#62; ...
        </button>
      );
    pageNb - stopNb[1] > 100 &&
      pageButtons.push(
        <button
          onClick={() => {
            const newStopNb = [...stopNb];
            newStopNb[0] = newStopNb[0] + 100;
            newStopNb[1] = newStopNb[1] + 100;
            setStopNb(newStopNb);
            setSkip((newStopNb[0] - 1) * limit);
          }}
        >
          &#62; +100
        </button>
      );
    stopNb[0] > 1 &&
      pageButtons.unshift(
        <button
          onClick={() => {
            const newStopNb = [...stopNb];
            newStopNb[0] = newStopNb[0] - 10;
            newStopNb[1] = newStopNb[1] - 10;
            setStopNb(newStopNb);
            setSkip((newStopNb[0] - 1) * limit);
          }}
        >
          ... &#60;
        </button>
      );

    stopNb[0] > 100 &&
      pageButtons.unshift(
        <button
          onClick={() => {
            const newStopNb = [...stopNb];
            newStopNb[0] = newStopNb[0] - 100;
            newStopNb[1] = newStopNb[1] - 100;
            setStopNb(newStopNb);
            setSkip((newStopNb[0] - 1) * limit);
          }}
        >
          -100 &#60;
        </button>
      );
    return pageButtons;
  };

  return (
    <div className="navBar">
      <div className="choose-limit">
        <span>Number per page:</span>
        <select
          name="select"
          id=""
          onChange={(event) => {
            setLimit(event.target.value);
            setStopNb([1, 10]);
          }}
        >
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="choose-page">
        <span>Go to page:</span>
        {pagesLoop(pageNb)}
      </div>
      <div className="totalPages">
        <span>Number of pages: {pageNb}</span>
      </div>
    </div>
  );
};
export default NavBar;
