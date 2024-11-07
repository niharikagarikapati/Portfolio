import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Projects from "./project";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
