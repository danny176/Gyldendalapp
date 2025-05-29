import { NavLink, useLocation } from "react-router-dom";
import hjemikon from "../assets/icons/hjemikon.svg";
import hjemikonActive from "../assets/icons/hjemikon_active.svg";
import modulerikon from "../assets/icons/modulerikon.svg";
import modulerikonActive from "../assets/icons/modulerikon_active.svg";
import avatarikon from "../assets/icons/avatarikon.svg";
import avatarikonActive from "../assets/icons/avatarikon_active.svg";
import personligikon from "../assets/icons/personligikon.svg";
import personligikonActive from "../assets/icons/personligikon_active.svg";

export default function Navigation() {
  const location = useLocation();

  // Match everything under /app/moduler or its subpaths
  const isModulerActive = location.pathname.startsWith("/app/moduler");

  const isAvatarActive = location.pathname.startsWith("/app/avatar");
  const isPersonligActive = location.pathname.startsWith("/app/personlig");

  return (
    <nav>
      <div className="navikoner">
        <NavLink to="/app/forside" end>
          {({ isActive }) => (
            <img src={isActive ? hjemikonActive : hjemikon} alt="Hjem" />
          )}
        </NavLink>

        <NavLink to="/app/moduler">
          <img
            src={isModulerActive ? modulerikonActive : modulerikon}
            alt="Moduler"
          />
        </NavLink>

        <NavLink to="/app/avatar">
          <img
            src={isAvatarActive ? avatarikonActive : avatarikon}
            alt="Avatar"
          />
        </NavLink>

        <NavLink to="/app/personlig">
          <img
            src={isPersonligActive ? personligikonActive : personligikon}
            alt="Personlig"
          />
        </NavLink>
      </div>
    </nav>
  );
}
