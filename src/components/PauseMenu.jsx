import krydsIkon from "../assets/skyggequiz/kryds.svg?url";
import "../css/pausemenu.css";
import { useNavigate } from "react-router-dom";

export default function PauseMenu({ onLuk }) {
  const navigate = useNavigate();

  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Er du sikker på du vil afslutte spillet?</h2>
        <div className="knap-gruppe">
          <button onClick={() => navigate("/app/forside")}>Forside</button>
          <button onClick={() => navigate("/app/moduler")}>Emner</button>
        </div>
        <button className="luk-knap" onClick={onLuk}>
          <img src={krydsIkon} alt="Luk" />
        </button>
      </div>
    </div>
  );
}
