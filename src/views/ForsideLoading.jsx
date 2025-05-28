import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.svg";
import gsap from "gsap";
import "../css/loading.css";

function ForsideLoading() {
  const logoRef = useRef(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Animate logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
    );

    // Wait 3 seconds then redirect based on auth state
    const timer = setTimeout(() => {
      if (user) {
        navigate("/app/forside", { replace: true }); // go to app
      } else {
        navigate("/login", { replace: true }); // go to login
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [user, navigate]);

  return (
    <div className="LogoContainer">
      <img ref={logoRef} src={logo} alt="Gyldendal App Logo" />
    </div>
  );
}

export default ForsideLoading;

