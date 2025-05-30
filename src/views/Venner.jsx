import leaderboard1 from "../assets/leaderboardtop3.svg";
import "../css/personlig.css";
import piltilbage from "../assets/icons/tilbageknap.svg";
import plusVen from "../assets/icons/plusvenicon.svg";
import badge from "../assets/badge.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Venner() {
  const navigate = useNavigate();
  const handleClick = () => {
    alert("Liste over venner");
  };
  const { user } = useAuth();

  return (
    <div className="venner-container">
      <img
        src={piltilbage}
        className="tilbageknap"
        alt="tilbage"
        onClick={() => navigate(-1)}
      />

      <img src={plusVen} className="venicon" alt="venicon" />
      <h2>Leaderboard</h2>

      <div className="leader-container">
        <img src={leaderboard1} alt="lead2" className="leader1-icon" />
        <div className="top4kknapper">
          <div className="top4knap">
            <h3>4.</h3>
            <h5>FrøkenFalk</h5>
            <div className="badgeogantal">
              <img src={badge} alt="badge" className="badgeicon" />
              <h4>8</h4>
            </div>
          </div>
          <div className="top4knap">
            <h3>5.</h3>
            <h5>BlipBlopX</h5>
            <div className="badgeogantal">
              <img src={badge} alt="badge" className="badgeicon" />
              <h4>6</h4>
            </div>
          </div>
          <div className="top4knap">
            <h3>6.</h3>
            <h5>ShadowSparkz</h5>
            <div className="badgeogantal">
              <img src={badge} alt="badge" className="badgeicon" />
              <h4>4</h4>
            </div>
          </div>
          <div className="top4knapbruger">
            <h3>6.</h3>
            <h5>{user?.displayName || "Bruger"}</h5>
            <div className="badgeogantal">
              <img src={badge} alt="badge" className="badgeicon" />
              <h4>0</h4>
            </div>
          </div>
        </div>
      </div>

      <button className="venner-button" onClick={handleClick}>
        Venner
      </button>
    </div>
  );
}

export default Venner;
