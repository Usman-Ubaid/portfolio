import "./styles/css/main.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/skillsSection/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <div className="divider"></div>
      {/* <About />
      <div className="divider"></div> */}
      <Education />
      <div className="divider"></div>
      <Skills />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
      <Footer />
    </div>
  );
}

export default App;
