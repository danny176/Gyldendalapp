import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import outroVideo from "../assets/Introvideosofie.mp4";

const LevelsPageComplete = () => {
  const videoRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleEnded = () => {
      setShowButton(true);
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

  const handleNavigate = () => {
    navigate("/app/modul1/skyggequiz1");
  };

  return (
    <div className="video-page2">
      <video ref={videoRef} src={outroVideo} autoPlay muted playsInline />

      {showButton && (
        <div className="button-container-startsofie">
          <button className="start-quiz-button" onClick={handleNavigate}>
            Start Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default LevelsPageComplete;
