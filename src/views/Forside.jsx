import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import avatarImage from "../assets/avatar.svg";
import klokkeIkon from "../assets/icons/klokkeikon.svg";
import fort from "../assets/icons/fortfor.svg";
import udforsk from "../assets/icons/udforskicon.svg";
import leaderboard from "../assets/icons/leaderboardicon.svg";
import ugenemne from "../assets/icons/ugenemnefor.svg";
import badge from "../assets/badge.svg";
import { useAvatar } from "../context/AvatarContext";

function Forside() {
  const { user } = useAuth();
  const { avatarSrc } = useAvatar();

  return (
    <div className="forside-container">
      <header className="forside-header">
        <div className="avatarognavn">
          <img src={avatarImage} alt="Avatar" className="forside-avatar" />
          <div className="brugernavnogbadge">
            <h2 className="forside-username">
              Velkommen <span>{user?.displayName || "Bruger"}!</span>
            </h2>
            <div className="badgeogantal">
              <img src={badge} alt="badge" className="badgeicon" />
              <h5>0</h5>
            </div>
          </div>
        </div>
        <img src={klokkeIkon} alt="Klok" className="forside-klokke" />
      </header>
      <div className="knappertop">
        <div className="knappertopbokse1">
          <img src={fort} alt="udforsk emner" />
          <h4>Fortsæt modul</h4>
        </div>
        <Link to="/app/moduler" className="link-wrapper">
          <div className="knappertopbokse2">
            <img src={udforsk} alt="udforsk knap" className="forside-emner" />
            <h4>Udforsk emner</h4>
          </div>
        </Link>
      </div>
      <Link to="/app/avatar" className="linkwrapava">
        <div className="avartarboks">
          <img src={avatarSrc} alt="..." className="forside-avatarmockup" />
          <h4>Style din avatar</h4>
        </div>
      </Link>
      <div className="sidstebokse">
        <div className="nedersterkasser">
          <img src={ugenemne} alt="udforsk emner" />
          <h4>Ugens emne</h4>
        </div>
        <Link to="/app/personlig/venner" className="link-wrapper">
          <div className="nedersterkasser">
            <img
              src={leaderboard}
              alt="udforsk knap"
              className="forside-emner"
            />
            <h4>Leaderboard</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Forside;
