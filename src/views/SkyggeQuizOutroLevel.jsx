import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import outroVideo from "../assets/levelklaret.mp4";
import BadgeSVG from "../assets/badge.svg";
import GenstandSVG from "../assets/Blomstgenstand.svg";
import KrydsSVG from "../assets/icons/lukiconsort.svg";
import { useBadge } from "../context/BadgeContext";


const LevelsPageComplete = () => {
  const videoRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { setBadgeCount } = useBadge();

  useEffect(() => {
    const handleEnded = () => {
      setShowPopup(true);
      setBadgeCount((prev) => prev + 1);
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="video-page2">
      <video ref={videoRef} src={outroVideo} autoPlay muted playsInline />

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <img
              src={KrydsSVG}
              className="close-icon"
              alt="Luk"
              onClick={handleClose}
            />
            <img
              src={BadgeSVG}
              alt="Top Illustration"
              className="popup-image top"
            />
            <p className="popup-text">
              Wuhu! Du har vundet et ny badge og låst op for noget nyt til din
              garderobe!
            </p>
            <img
              src={GenstandSVG}
              alt="Bottom Illustration"
              className="popup-image bottom"
            />
            <div className="button-row">
              <button
                className="button1row"
                onClick={() => navigate("/app/avatar")}
              >
                Garderobe
              </button>
              <button
                className="button2row"
                onClick={() => navigate("/app/personlig/venner")}
              >
                Leaderboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelsPageComplete;
