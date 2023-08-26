import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Music from "./components/BackgroundMusic";

export default function App() {
  return (
    <main className="text-gray-400 bg-violet-900 body-font">
      
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Music/>
    </main>
  );
}