import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ForsideLoading from "./views/ForsideLoading";
import Forside from "./views/Forside";
import Moduler from "./views/Moduler";
import Avatar from "./views/Avatar";
import AvatarHoved from "./views/AvatarHoved";
import Personlig from "./views/Personlig";
import Login from "./views/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import SkyggeQuiz1 from "./components/SkyggeQuiz1";
import SkyggeQuiz2 from "./views/SkyggeQuiz2";
import SkyggeQuiz4 from "./components/SkyggeQuiz4";
import DragDrop from "./components/DragDrop";
import SkyggeQuiz1Done from "./components/SkyggeQuiz1Done";
import SkyggeQuiz2Done from "./components/SkyggeQuiz2Done";
import SkyggeQuiz3Done from "./components/SkyggeQuiz3Done";
import SkyggeQuizOutro from "./views/SkyggeQuizOutro";
import ModulerUnderEmner from "./views/ModulerUnderEmner";
import SofieLevels from "./views/LevelsSofie";
import Venner from "./views/Venner";
import IntroVideoSofie from "./views/IntroVideoSofie";
import { AvatarProvider } from "./context/AvatarContext";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ForsideLoading />, // først loading ved rod
  },
  {
    path: "/login",
    element: <Login />, // login uden beskyttelse
  },
  {
    path: "/app", // alt indenfor app skal være beskyttet
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/app/forside", element: <Forside /> },
      { path: "/app/modul1/skyggequiz1", element: <SkyggeQuiz1 /> },
      { path: "/app/modul1/skyggequiz2", element: <SkyggeQuiz2 /> },
      { path: "/app/modul1/skyggequiz4", element: <SkyggeQuiz4 /> },
      { path: "/app/modul1/dragndrop", element: <DragDrop /> },
      {
        path: "/app/introvideosofie",
        element: <IntroVideoSofie />,
      },
      { path: "/app/modulerunderemner", element: <ModulerUnderEmner /> },
      { path: "/app/sofielevels", element: <SofieLevels /> },
      { path: "/app/venner", element: <Venner /> },
      { path: "/app/modul1/skyggequiz1Done", element: <SkyggeQuiz1Done /> },
      { path: "/app/modul1/skyggequiz2Done", element: <SkyggeQuiz2Done /> },
      { path: "/app/modul1/skyggequiz3Done", element: <SkyggeQuiz3Done /> },
      { path: "/app/modul1/skyggequizoutro", element: <SkyggeQuizOutro /> },
      { path: "/app/moduler", element: <Moduler /> },
      { path: "/app/avatar", element: <Avatar /> },
      { path: "/app/avatarhoved", element: <AvatarHoved /> },
      { path: "/app/personlig", element: <Personlig /> },
    ],
  },
]);

function App() {
  return (
    <AvatarProvider>
      <RouterProvider router={router} />
    </AvatarProvider>
  );
}

export default App;
