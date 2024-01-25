import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MainSection } from "./components/Mainsection";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MainSection />
    </>
  );
}

export default App;
