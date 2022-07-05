import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Favoris from "./pages/Favoris";
import DetailCard from "./pages/DetailCard";

//redux

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Accueil />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/detail" element={<DetailCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
