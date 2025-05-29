import "../css/Avatar.css";
import supermanIkon from "../assets/icons/superikon.svg";
import removeIcon from "../assets/icons/removeitem.svg";
import questionIcon from "../assets/icons/question.svg";
import { useAvatar } from "../context/AvatarContext";
import piltilbage from "../assets/icons/tilbageknap.svg";
import { useNavigate } from "react-router-dom";

function Hovedbeklaedning() {
  const navigate = useNavigate();

  const { setClothing } = useAvatar();

  const handleSuperClick = () => setClothing("superman");
  const handleRemoveClick = () => setClothing("default");

  const { avatarSrc, changeAvatar } = useAvatar();

  return (
    <div className="avatar-page">
      <img
        src={piltilbage}
        className="tilbageknap"
        alt="tilbage"
        onClick={() => navigate(-1)}
      />

      <h1>
        Hver gang du gennemfører et level, får du nye ting til garderoben!
      </h1>

      <div className="avatar-image-container">
        <img src={avatarSrc} alt="Avatar" className="avatar-image" />
      </div>

      <h2 className="category-title">Tøj</h2>

      <div className="icon-grid">
        <img
          src={removeIcon}
          alt="remove"
          className="item-icon"
          onClick={handleRemoveClick}
        />
        <img
          src={supermanIkon}
          alt="Hat"
          className="item-icon"
          onClick={handleSuperClick}
        />
        {Array.from({ length: 6 }).map((_, i) => (
          <img
            key={i}
            src={questionIcon}
            alt="Locked item"
            className="item-icon blurred"
          />
        ))}
      </div>
    </div>
  );
}

export default Hovedbeklaedning;
