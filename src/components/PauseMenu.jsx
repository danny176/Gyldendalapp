import krydsIkon from '../assets/skyggequiz/kryds.svg?url';
import "../css/lukknap.css";

export default function PauseMenu({ onLuk }) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Vil du forlade quizzen?</h2>
        <div className="knap-gruppe">
          <button onClick={() => alert('Går til startsiden')}>Startside</button>
          <button onClick={() => alert('Går til hovedmenu')}>Hovedmenu</button>
        </div>
        <button className="luk-knap" onClick={onLuk}>
          <img src={krydsIkon} alt="Luk" />
        </button>
      </div>
    </div>
  );
}
