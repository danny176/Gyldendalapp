import { createContext, useContext, useState } from "react";

// Skab konteksten
const BadgeContext = createContext();

// Konteksten
export const BadgeProvider = ({ children }) => {
  const [badgeCount, setBadgeCount] = useState(0);

  return (
    <BadgeContext.Provider value={{ badgeCount, setBadgeCount }}>
      {children}
    </BadgeContext.Provider>
  );
};

// andre komponenter kan bruge for at læse/opdatere badgeCount
export const useBadge = () => useContext(BadgeContext);
