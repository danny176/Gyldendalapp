import { useState } from "react";
import { motion } from "framer-motion";
import "../css/DragDropGame4.css";
import {
  DndContext,
  useDraggable,
  useDroppable,
  closestCenter,
} from "@dnd-kit/core";
import elefanttaler from "../assets/skyggequiz/modul1/elefanttaler.svg";
import { useNavigate } from "react-router-dom";

const STATEMENTS = [
  "Reality TV viser, hvordan livet virkelig er",
  "Det vigtigste i livet er at søge sandhed og indsigt",
  "Mening er det samme som fakta",
  "Viden kommer gennem refleksion og forståelse",
];

const CATEGORIES = ["Skygge (Overfladisk)", "Idé (Dybt)"];

const CORRECT_MATCHES = {
  "Reality TV viser, hvordan livet virkelig er": "Skygge (Overfladisk)",
  "Det vigtigste i livet er at søge sandhed og indsigt": "Idé (Dybt)",
  "Mening er det samme som fakta": "Skygge (Overfladisk)",
  "Viden kommer gennem refleksion og forståelse": "Idé (Dybt)",
};

const DropZone = ({ id, matchedStatements, isIncorrect }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className="stg-drop-label-wrapper">
      <div className="stg-label-text">{id}</div>
      <div
        ref={setNodeRef}
        className={`stg-drop-zone ${isIncorrect ? "stg-incorrect" : ""}`}
      >
        {matchedStatements.map((statement) => (
          <motion.div layout key={statement} className="stg-matched-item">
            {statement}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const DraggableStatement = ({ statement }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: statement,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="stg-draggable-item"
      {...listeners}
      {...attributes}
    >
      {statement}
    </div>
  );
};

const ShadowTruthGame = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [matched, setMatched] = useState({
    "Skygge (Overfladisk)": [],
    "Idé (Dybt)": [],
  });
  const [incorrectDrop, setIncorrectDrop] = useState(null);

  const usedStatements = [
    ...matched["Skygge (Overfladisk)"],
    ...matched["Idé (Dybt)"],
  ];
  const unmatchedStatements = STATEMENTS.filter(
    (s) => !usedStatements.includes(s)
  );

  const handleDragEnd = (event) => {
    const { over, active } = event;

    if (over) {
      const dropZoneId = over.id;
      const statement = active.id;

      if (CORRECT_MATCHES[statement] === dropZoneId) {
        const updatedMatched = {
          ...matched,
          [dropZoneId]: [...matched[dropZoneId], statement],
        };
        setMatched(updatedMatched);
        setIncorrectDrop(null);
        setFeedback("Korrekt! Godt set.");
        setIsCorrect(true);
        setShowFeedback(true);

        const allMatched = STATEMENTS.every((stmt) =>
          Object.values(updatedMatched).some((arr) => arr.includes(stmt))
        );

        if (allMatched) {
          setTimeout(() => {
            navigate("/app/modul1/skyggequizoutro");
          }, 2000);
        }
      } else {
        setIncorrectDrop(dropZoneId);
        setFeedback("Ikke helt... prøv igen.");
        setIsCorrect(false);
        setShowFeedback(true);
      }
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="stg-game-wrapper">
        <img
          src={elefanttaler}
          className="elefanttaler-skyggequiz1"
          alt="elefant"
        />
        <div className="tekstinfo">
          <h4>Hvilke begreber passer sammen?</h4>
          <h3>Se godt på de fire udsagn og sorter dem</h3>
        </div>
        <div className="stg-drop-wrapper">
          {CATEGORIES.map((category) => (
            <DropZone
              key={category}
              id={category}
              matchedStatements={matched[category]}
              isIncorrect={incorrectDrop === category}
            />
          ))}
        </div>

        <div className="stg-drag-wrapper">
          {unmatchedStatements.map((statement) => (
            <DraggableStatement key={statement} statement={statement} />
          ))}
        </div>

        {showFeedback && (
          <div
            className={`feedback ${
              isCorrect ? "stg-correct" : "stg-incorrect"
            }`}
          >
            {feedback}
          </div>
        )}
      </div>
    </DndContext>
  );
};

export default ShadowTruthGame;
