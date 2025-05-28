import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import outroVideo from "../assets/SkyggeQuizOutroVid2.mp4";

const GifRedirectPage = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleEnded = () => {
      navigate("/app/skyggequizoutrolevel");
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
  }, [navigate]);

  return (
    <div className="video-page">
      <video ref={videoRef} src={outroVideo} autoPlay muted playsInline />
    </div>
  );
};

export default GifRedirectPage;
