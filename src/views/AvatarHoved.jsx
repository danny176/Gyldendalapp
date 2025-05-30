import "../css/Avatar.css";
import hatIcon from "../assets/icons/hat.svg";
import blomstIcon from "../assets/icons/blomstikon.svg";
import removeIcon from "../assets/icons/removeitem.svg";
import questionIcon from "../assets/icons/question.svg";
import { useAvatar } from "../context/AvatarContext";
import piltilbage from "../assets/icons/tilbageknap.svg";
import { useNavigate } from "react-router-dom";

function Hovedbeklaedning() {
  const navigate = useNavigate();

  const { setHeadwear } = useAvatar();

  const handleHatClick = () => setHeadwear("hat");
  const handleBlomstClick = () => setHeadwear("flower");
  const handleRemoveClick = () => setHeadwear("none");

  const { avatarSrc } = useAvatar();

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

      <h2 className="category-title">Hovedbeklædning</h2>

      <div className="icon-grid">
        <img
          src={removeIcon}
          alt="remove"
          className="item-icon"
          onClick={handleRemoveClick}
        />
        <img
          src={hatIcon}
          alt="Hat"
          className="item-icon"
          onClick={handleHatClick}
        />
        <img
          src={blomstIcon}
          alt="Blomst"
          className="item-icon"
          onClick={handleBlomstClick}
        />
        {Array.from({ length: 5 }).map((_, i) => (
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
