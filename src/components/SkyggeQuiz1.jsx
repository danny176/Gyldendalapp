import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PauseMenu from "./PauseMenu";
import "../css/skyggequiz.css";
import krydsIkon from "../assets/icons/lukiconhvid.svg";
import elefanttaler from "../assets/skyggequiz/modul1/elefanttaler.svg";
import spoergsmaal1 from "../assets/skyggequiz/modul1/spoergsmaal1.svg?url";
import spoergsmaal2 from "../assets/skyggequiz/modul1/spoergsmaal2.svg?url";
import spoergsmaal3 from "../assets/skyggequiz/modul1/spoergsmaal3.svg?url";

const spoergsmaal = [
  {
    id: 1,
    baggrund: spoergsmaal1,
    korrektSvar: "Kat",
    svarMuligheder: ["Kat", "Hund", "Hest"],
    kommentar: {
      forkert: "Skygger er ikke virkeligheden... prøv igen!",
      rigtig: "Ja! Du følger lyset mod sandheden!",
    },
  },
  {
    id: 2,
    baggrund: spoergsmaal2,
    korrektSvar: "Træ",
    svarMuligheder: ["Plante", "Busk", "Træ"],
    kommentar: {
      forkert: "Det var ikke helt rigtigt. Kig nærmere på skyggens form.",
      rigtig: "Ja! Du følger lyset mod sandheden!",
    },
  },
  {
    id: 3,
    baggrund: spoergsmaal3,
    korrektSvar: "Blomst",
    svarMuligheder: ["Pind", "Blad", "Blomst"],
    kommentar: {
      forkert: "Skyggen snyder dig – se efter tegnene.",
      rigtig: "Ja! Du følger lyset mod sandheden!",
    },
  },
];

export default function SkyggeQuiz() {
  const [aktivtSpoergsmaal, setAktivtSpoergsmaal] = useState(0);
  const [besked, setBesked] = useState("");
  const [visBesked, setVisBesked] = useState(false);
  const [erKorrekt, setErKorrekt] = useState(false);
  const [visOverlay, setVisOverlay] = useState(false);
  const navigate = useNavigate();
  const [valgtSvar, setValgtSvar] = useState(null);
  const nuvaerendeSpoergsmaal = spoergsmaal[aktivtSpoergsmaal];

  const haandterSvar = (valg) => {
    const nuvaerende = spoergsmaal[aktivtSpoergsmaal];
    const korrekt = valg === nuvaerende.korrektSvar;

    setValgtSvar(valg);
    setErKorrekt(korrekt);
    setBesked(
      korrekt ? nuvaerende.kommentar.rigtig : nuvaerende.kommentar.forkert
    );
    setVisBesked(true);

    setTimeout(() => {
      setVisBesked(false);
      setValgtSvar(null);

      if (korrekt) {
        if (aktivtSpoergsmaal < spoergsmaal.length - 1) {
          setAktivtSpoergsmaal(aktivtSpoergsmaal + 1);
        } else {
          navigate("/app/modul1/skyggequiz1Done");
        }
      }
    }, 2000);
  };

  const lukOverlay = () => setVisOverlay(false);
  const aabnOverlay = () => setVisOverlay(true);

  return (
    <div className="container-skyggequiz1">
      <div className="tekstinfo">
        <h4>Se godt på skyggen og gæt hvad det er</h4>
      </div>

      <img
        src={elefanttaler}
        className="elefanttaler-skyggequiz1"
        alt="elefant"
      />
      <div />

      <img
        src={nuvaerendeSpoergsmaal.baggrund}
        className="fuldskraem-billede"
        alt=""
      />
      <div />

      {/* Knap til at åbne pausemenuen */}
      <img
        src={krydsIkon}
        alt="Luk quiz"
        onClick={aabnOverlay}
        className="luk-ikon"
      />

      <div className="answer-box-quiz1">
        {nuvaerendeSpoergsmaal.svarMuligheder.map((valg) => (
          <button
            key={valg}
            onClick={() => haandterSvar(valg)}
            className={`answer-button-quiz1 ${
              valgtSvar === valg
                ? valg === nuvaerendeSpoergsmaal.korrektSvar
                  ? "correct-answer1"
                  : "wrong-answer1"
                : ""
            }`}
            disabled={!!valgtSvar}
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
