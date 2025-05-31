import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";
import { BadgeProvider } from "./context/BadgeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BadgeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BadgeProvider>
  </StrictMode>
);
