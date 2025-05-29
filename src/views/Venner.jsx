import leaderboard1 from "../assets/leaderboardtop3.svg";
import leaderboard2 from "../assets/leaderboardtop4.svg";
import "../css/personlig.css";
import piltilbage from "../assets/icons/tilbageknap.svg";
import plusVen from "../assets/icons/plusvenicon.svg";
import { useNavigate } from "react-router-dom";

function Venner() {
  const navigate = useNavigate();
  const handleClick = () => {
    alert("Liste over venner");
  };

  return (
    <div className="venner-container">
      <img
        src={piltilbage}
        className="tilbageknap"
        alt="tilbage"
        onClick={() => navigate(-1)}
      />

      <img
        src={plusVen}
        className="venicon"
        alt="venicon"
      />
      <h2>Leaderboard</h2>

      <div className="leader-container">
        <img src={leaderboard1} alt="lead2" className="leader1-icon" />
        <img src={leaderboard2} alt="lead1" className="leader-icon" />
      </div>

      <button className="venner-button" onClick={handleClick}>
        Venner
      </button>
    </div>
  );
}

export default Venner;
