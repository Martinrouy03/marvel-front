import popLaugh from "../assets/laughing.png";
const WarningPopUp = ({
  warning,
  setWarning,
  setVisibility,
  myToken,
  setIsOver,
}) => {
  return (
    <div
      className="popup-div"
      style={{
        transform:
          warning && !myToken ? "translate(0px,-400px)" : "translate(0px,0px)",
      }}
    >
      <button
        onClick={() => {
          setVisibility([false, true]);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setWarning(false);
          setIsOver(false);
        }}
      >
        Fuck OFF
      </button>
      <h1>You are not a subscriber?</h1>
      <img id="pop-up" src={popLaugh} alt="pop-up" />
    </div>
  );
};
export default WarningPopUp;
