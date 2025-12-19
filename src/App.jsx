import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import FloatingKeywords from "./Components/Particle";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Experience from "./Components/Experience";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience/>
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
