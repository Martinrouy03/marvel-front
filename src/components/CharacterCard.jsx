import { Link } from "react-router-dom";
const CharacterCard = ({ elem }) => {
  return (
    <Link className="character-card" to={"/comics/" + elem._id} key={elem._id}>
      <img
        src={
          elem.thumbnail.path + "/portrait_xlarge." + elem.thumbnail.extension
        }
        alt=""
      />
      <h2>{elem.name}</h2>
    </Link>
  );
};
export default CharacterCard;
