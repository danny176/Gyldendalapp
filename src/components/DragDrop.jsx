import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../css/DragDropGame.css";
import {
  DndContext,
  useDraggable,
  useDroppable,
  closestCenter,
  PointerSensor,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import HulenSVG from "../assets/images/HulenSVG.svg";
import SkyggerneSVG from "../assets/images/SkyggerneSVG.svg";
import LysetSVG from "../assets/images/LysetSVG.svg";
import IdeverdenenSVG from "../assets/images/IdeverdenenSVG.svg";
import elefanttaler from "../assets/skyggequiz/modul1/elefanttaler.svg";
import { useNavigate } from "react-router-dom";

const EXPLANATIONS = [
  "Verden vi oplever med sanserne",
  "Illusioner, meninger",
  "Viden, sandhed",
  "Den perfekte, usynlige verden",
];

const CONCEPTS = [
  { id: "Hulen", image: HulenSVG, label: "Hulen" },
  { id: "Skyggerne", image: SkyggerneSVG, label: "Skyggerne" },
  { id: "Lyset", image: LysetSVG, label: "Lyset" },
  { id: "Idéverdenen", image: IdeverdenenSVG, label: "Idéverdenen" },
];

const CORRECT_MATCHES = {
  0: "Hulen",
  1: "Skyggerne",
  2: "Lyset",
  3: "Idéverdenen",
};

const DropBox = ({ id, matchedConcept, isIncorrect }) => {
  const { setNodeRef } = useDroppable({ id });

  // Find the concept object that matches the matchedConcept id
  const matchedConceptObj = CONCEPTS.find(
    (concept) => concept.id === matchedConcept
  );

  return (
    <div className="drop-box-label-wrapper">
      <div className="label-text">{EXPLANATIONS[id]}</div>
      <div
        ref={setNodeRef}
        className={`drop-box ${isIncorrect ? "incorrect" : ""}`}
      >
        {matchedConceptObj && (
          <motion.div layout className="matched-box">
            <img
              src={matchedConceptObj.image}
              alt={matchedConceptObj.label}
              className="matched-image"
              draggable="false"
            />
            <div className="matched-label">{matchedConceptObj.label}</div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const DraggableBox = ({ concept }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: concept.id,
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
      className="draggable-box"
      {...listeners}
      {...attributes}
    >
      <img
        src={concept.image}
        alt={concept.label}
        className="draggable-image"
        draggable="false"
      />
      <div className="image-label">{concept.label}</div>
    </div>
  );
};

const DragDropGame = () => {
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [matched, setMatched] = useState({});
  const [incorrectDrop, setIncorrectDrop] = useState(null);
  const navigate = useNavigate();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 300,
        tolerance: 10,
      },
    })
  );

  useEffect(() => {
    if (Object.keys(matched).length === EXPLANATIONS.length) {
      const timer = setTimeout(() => {
        navigate("/app/modul1/skyggequiz3Done");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [matched, navigate]);

  const unmatchedConcepts = CONCEPTS.filter(
    (concept) => !Object.values(matched).includes(concept.id)
  );

  const handleDragEnd = (event) => {
    console.log("DRAG END:", event);
    const { over, active } = event;

    if (over) {
      const overId = parseInt(over.id);
      const conceptId = active.id;

      if (CORRECT_MATCHES[overId] === conceptId) {
        setMatched((prev) => ({ ...prev, [overId]: conceptId }));
        setIncorrectDrop(null);
        setFeedback(
          "Korrekt. Platon mente at de fleste lever i skyggerne. Kun ved at tænke selv kan vi finde vejen til sandhedens lys."
        );
        setIsCorrect(true);
      } else {
        setIncorrectDrop(overId);
        setFeedback("Forkert, prøv igen!");
        setIsCorrect(false);
      }

      setShowFeedback(true);

      setTimeout(() => {
        setShowFeedback(false);
        setIncorrectDrop(null);
      }, 4000);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="game-container">
        <img
          src={elefanttaler}
          className="elefanttaler-skyggequiz1"
          alt="elefant"
        />
        <div className="tekstinfo">
          <h4>Hvilke begreber passer sammen?</h4>
          <h3>
            Se godt på de fire begreber og udsagn. Sæt dem der passer sammen ved
            at trække stenene op
          </h3>
        </div>
        <div className="drop-container">
          {EXPLANATIONS.map((_, index) => (
            <DropBox
              key={index}
              id={index}
              matchedConcept={matched[index]}
              isIncorrect={incorrectDrop === index}
            />
          ))}
        </div>

        <div className="drag-container">
          {unmatchedConcepts.map((concept) => (
            <DraggableBox key={concept.id} concept={concept} />
          ))}
        </div>

        {showFeedback && (
          <div className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
            {feedback}
          </div>
        )}
      </div>
    </DndContext>
  );
};

export default DragDropGame;
