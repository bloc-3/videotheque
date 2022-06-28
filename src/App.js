import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./pages/Accueil";
// import UserList from "./pages/UserList";
import Connexion from "./pages/Connexion";

//redux

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        {/* <Route path="/coup-de-coeur" element={<UserList />} /> */}
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
