import "./styles/sass/style.sass";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experiencia from "./pages/Experiencia";
import MapaDeSetores from "./pages/MapaDeSetores";
import Faq from "./pages/Faq";
import Ingresso from "./pages/Ingresso";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/mapadesetores" element={<MapaDeSetores />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/ingresso" element={<Ingresso />} />
      </Routes>
    </Router>
  );
}

export default App;
