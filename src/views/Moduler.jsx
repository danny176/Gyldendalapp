import { Link } from "react-router-dom";
import "../css/moduler.css";

function Moduler() {
  const categories = [
    "Filosofi",
    "Vikingetiden",
    "Fantasi og Eventyr",
    "Barndom og Identitet",
    "Myter og Religion",
    "Mit Anden Verdenskrig",
  ];

  return (
    <div className="modulcontainer">
      <h1 className="headline">Vælg emne</h1>

      <div className="button-grid-moduler">
        {categories.map((category) => {
          const isLink = category === "Filosofi";
          const linkTo =
            category === "Filosofi" ? "/app/modulerunderemner" : null;

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

export default Moduler;
