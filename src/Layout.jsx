import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";

function Layout() {
  const lokation = useLocation();

  //Skjul navbar på bestemder sider/komponenter

  const skjulNavigation = lokation.pathname.startsWith("/app/modul1");

  return (
    <div>
      <main>
        <Outlet />
      </main>
      {!skjulNavigation && <Navigation />}
    </div>
  );
}

export default Layout;
