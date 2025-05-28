import { Link, useNavigate } from "react-router-dom";
import emneblok1 from "../assets/sofiesverden.png";
import piltilbage from "../assets/icons/tilbageknap.svg";
import "../css/moduler.css";

function ModulerUnder() {
  const navigate = useNavigate();

  const categories = [
    "Sofies verden",
    "Alice i Eventyrland",
    "Momo",
    "Brødrene Løvehjerte",
    "Animal Farm",
    "Matilda",
  ];

  return (
    <div className="modulcontainer">
      <img
        src={piltilbage}
        className="tilbageknap"
        alt="tilbage"
        onClick={() => navigate(-1)}
      />

      <h1 className="headline-underemner">Vælg læreringsmodul</h1>

      <div className="button-grid-moduler">
        {categories.map((category) => {
          const isLink = category === "Sofies verden";
          const linkTo =
            category === "Sofies verden" ? "/app/sofielevels" : null;

          return isLink ? (
            <Link
              key={category}
              to={linkTo}
              className="category-button-moduler link-button-moduler"
            >
              {category}
            </Link>
          ) : (
            <button key={category} className="category-button-moduler">
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ModulerUnder;
