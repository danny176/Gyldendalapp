import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "../css/login.css";

import { useNavigate } from "react-router-dom"; // <-- import

function Login() {
  const navigate = useNavigate(); // <-- initialize navigate
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isRegister) {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(res.user, { displayName: username });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/app/forside"); // <-- redirect to homepage (Forside)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container-loginside">
      <h2>
        {isRegister ? "Opret bruger" : "Log ind og kom på eventyr med Ellie!"}
      </h2>
      <form className="formcontainer" onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <h4>Brugernavn</h4>
            <input
              className="usernamebox"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </>
        )}
        <h4>Email</h4>
        <input
          className="emailbox"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h4>Password</h4>
        <input
          className="passwordbox"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="registrerbruger">
          {isRegister
            ? "Har du allerede en bruger?"
            : "Er du ny? Opret en profil"}{" "}
          <button
            className="regknap"
            type="button"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Log In" : "her"}
          </button>
        </p>
        <button className="loginknap" type="submit">
          {isRegister ? "Opret" : "Login"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
