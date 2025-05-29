import { Link } from "react-router-dom";
import { useAvatar } from "../context/AvatarContext";
import "../css/Avatar.css";


function Avatar() {
  
  const { avatarSrc } = useAvatar();

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
      <h1>Ellie venter på sit outfit!</h1>

      <div className="avatar-image-container">
        <img src={avatarSrc} alt="Avatar" className="avatar-image" />
      </div>

      <div className="button-grid">
        {categories.map((category) => {
          const isLink = category === "Hovedbeklædning" || category === "Tøj";
          const linkTo =
            category === "Hovedbeklædning"
              ? "/app/avatar/hoved"
              : category === "Tøj"
              ? "/app/avatar/toej"
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
