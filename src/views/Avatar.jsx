import avatarImage from "../assets/avatarstor.svg";
import { Link } from "react-router-dom";
import { useAvatar } from "../context/AvatarContext";
import "../css/Avatar.css";

function Avatar() {

const { avatarSrc, changeAvatar } = useAvatar();

  const categories = [
    "Briller",
    "Hovedbeklædning",
    "Tøj",
    "Øreringe",
    "Sko",
    "Mit skab",
  ];

  return (
    <div className="avatar-page">
      <h1>Din elefant venter på sit outfit!</h1>

      <div className="avatar-image-container">
        <img src={avatarSrc} alt="Avatar" className="avatar-image" />
      </div>

      <div className="button-grid">
        {categories.map((category) => {
          const isLink = category === "Hovedbeklædning" || category === "Tøj";
          const linkTo =
            category === "Hovedbeklædning"
              ? "/app/avatarhoved"
              : category === "Tøj"
              ? "/app/toj"
              : null;

          return isLink ? (
            <Link
              key={category}
              to={linkTo}
              className="category-button link-button"
            >
              {category}
            </Link>
          ) : (
            <button key={category} className="category-button">
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Avatar;
