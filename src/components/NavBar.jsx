import { useState } from "react";
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

    console.log(count, pageNb, limit);
    // console.log(, stopNb[1]);
    pageNb > stopNb[1] &&
      pageButtons.push(
        <button
          onClick={() => {
            const newStopNb = [...stopNb];
            console.log(newStopNb);
            newStopNb[0] = newStopNb[0] + 10;
            newStopNb[1] = newStopNb[1] + 10;
            console.log(newStopNb);
            setStopNb(newStopNb);
          }}
        >
          &#62; ...
        </button>
      );
    stopNb[0] > 1 &&
      pageButtons.unshift(
        <button
          onClick={() => {
            const newStopNb = [...stopNb];
            console.log(newStopNb);
            newStopNb[0] = newStopNb[0] - 10;
            newStopNb[1] = newStopNb[1] - 10;
            console.log(newStopNb);
            setStopNb(newStopNb);
          }}
        >
          &#60; ...
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
          }}
        >
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="20">20</option>
        </select>
      </div>
      <span>Aller à la page:</span>
      {pagesLoop(pageNb)}
    </div>
  );
};
export default NavBar;
