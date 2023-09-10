import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Slideshow from "./components/Slideshow";

export default function App() {
  return (
    <main className="text-gray-400 bg-violet-900 body-font">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <div className="text-center items-center">
      <Slideshow/>
      </div>
      <Contact />
    </main>
  );
}