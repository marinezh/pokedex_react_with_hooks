import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Pokelist from "./components/Pokelist";
import About from "./components/About";
import Home from "./components/Home";
import PokeSingle from "./components/PokeSingle";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokelist" element={<Pokelist />} />
          <Route path="pokelist/:pokesingle" element={<PokeSingle />} />
          <Route path="about" element={<About />} />
        </Route>

  
      </Routes>
    </BrowserRouter>
  );
};

export default App;
