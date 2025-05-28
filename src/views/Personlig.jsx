import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../css/personlig.css";

function Personlig() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmed = window.confirm("Er du sikker på, at du vil logge ud?");
    if (!confirmed) return;

    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Fejl ved log ud:", error);
    }
  };

  return (
    <div className="personligcontainer">
      <h1>
        Lorem ipsum dolor sit amet consectetur. Ultricies praesent non feugiat
        cursus lectus.
      </h1>
      <div className="knapperkol">
        <button onClick={() => navigate("/app/venner")}>Venner</button>
        <button>Gennemførte moduler</button>
        <button>Indstillinger</button>
        <button onClick={handleLogout}>Log ud</button>
      </div>
    </div>
  );
}

export default Personlig;
