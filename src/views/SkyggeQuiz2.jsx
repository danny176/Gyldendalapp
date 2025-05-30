import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PauseMenu from "../components/PauseMenu";
import "../css/skyggequiz.css";
import krydsIkon from "../assets/icons/lukiconhvid.svg";
import elefanttaler from "../assets/skyggequiz/modul1/elefanttaler.svg";
import spoergsmaal1quiz2 from "../assets/skyggequiz/modul1/quiz2hule.svg";

const spoergsmaal = {
  baggrund: spoergsmaal1quiz2,
  korrektSvar: "Stil spørgsmål og gå mod lyset",
  svarMuligheder: [
    "Bliv siddende og se på skyggerne",
    "Stil spørgsmål og gå mod lyset",
    "Efterlign figurerne bag dig",
  ],
  kommentar: {
    forkert: "Ikke helt rigtigt... prøv igen!",
    rigtig: "Ja! Platon mente at vejen til erkendelse og sand indsigt går gennem at tvivle, stille spørgsmål og søge viden.",
  },
};

export default function SkyggeQuiz() {
  const [visBesked, setVisBesked] = useState(false);
  const [besked, setBesked] = useState("");
  const [erKorrekt, setErKorrekt] = useState(false);
  const [valgtSvar, setValgtSvar] = useState(null); // track selected answer
  const [visOverlay, setVisOverlay] = useState(false);
  const navigate = useNavigate();

  const haandterSvar = (valg) => {
    setValgtSvar(valg);
    const korrekt = valg === spoergsmaal.korrektSvar;

    setErKorrekt(korrekt);
    setBesked(
      korrekt ? spoergsmaal.kommentar.rigtig : spoergsmaal.kommentar.forkert
    );
    setVisBesked(true);

    setTimeout(() => {
      setVisBesked(false);
      if (korrekt) {
        navigate("/app/modul1/skyggequiz2Done");
      }
    }, 6000);
  };

  const lukOverlay = () => setVisOverlay(false);
  const aabnOverlay = () => setVisOverlay(true);

  return (
    <div className="container-skyggequiz1">
      <div className="tekstinfo">
        <h4>Hvilken udgang fører Sofie mod lyset?</h4>
        <h3>Se godt på de tre udsagn og vælg den rigtige</h3>
      </div>

      <img
        src={elefanttaler}
        className="elefanttaler-skyggequiz1"
        alt="elefant"
      />

      <img src={spoergsmaal.baggrund} className="fuldskraem-billede" alt="" />

      {/* Knap til at åbne pausemenuen */}
      <img
        src={krydsIkon}
        alt="Luk quiz"
        onClick={aabnOverlay}
        className="luk-ikon"
      />

      <div className="answer-box">
        {spoergsmaal.svarMuligheder.map((valg) => (
          <button
            key={valg}
            onClick={() => haandterSvar(valg)}
            className={`answer-button2 ${
              visBesked && valgtSvar === valg && erKorrekt
                ? "correct-answer"
                : ""
            }`}
            disabled={visBesked && erKorrekt}
          >
            {valg}
          </button>
        ))}
      </div>

      {visBesked && <div className="feedback">{besked}</div>}
      {visOverlay && <PauseMenu onLuk={lukOverlay} />}
    </div>
  );
}
