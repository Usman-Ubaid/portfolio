import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/skillsSection/Skills";
import Education from "../components/Education";

const Routers = () => {
  const routes = [
    { id: 1, path: "/", element: <Home /> },
    { id: 2, path: "/projects", element: <Projects /> },
    { id: 3, path: "/skills", element: <Skills /> },
    { id: 4, path: "/education", element: <Education /> },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Routers;
