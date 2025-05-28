import doneBaggrund from "../assets/donemodul3.svg";
import "../css/skyggequiz.css";
import { Link } from "react-router-dom";

export default function SkyggeQuiz1Done() {
  return (
    <div className="done-container">
      <img src={doneBaggrund} alt="Baggrund" className="done-baggrund" />

      <div className="tekstinfo">
        <h4>Sådan! Du har hjulpet Sofie et skridt videre</h4>
      </div>

      <div className="done-indhold">
        <Link to="/app/sofielevels" className="done-knap">
          Levels
        </Link>
        <Link to="/app/modul1/skyggequiz4" className="done-knap2">
          Næste opgave
        </Link>
      </div>
    </div>
  );
}
