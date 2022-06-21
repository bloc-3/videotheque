import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acceuil from "./pages/Acceuil";
// import UserList from "./pages/UserList";
// import LoginPage from "./pages/LoginPage";

//redux

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        {/* <Route path="/coup-de-coeur" element={<UserList />} />
        <Route path="/connexion" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
