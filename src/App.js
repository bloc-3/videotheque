import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { context } from "./context";

import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Favoris from "./pages/Favoris";
import DetailsFilm from "./pages/DetailsFilm";

const firebaseConfig = {
  apiKey: "AIzaSyC1Y72KYrMkKaTPW8aG-9yicUrn203aOV0",
  authDomain: "cube3-a88eb.firebaseapp.com",
  projectId: "cube3-a88eb",
  storageBucket: "cube3-a88eb.appspot.com",
  messagingSenderId: "862736525998",
  appId: "1:862736525998:web:bd960f8aaa7ec6a352db3f",
  measurementId: "G-24P9DPJT9C"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

const App = () => {
  const [userId, setUserId] = useState(null);

  auth.onAuthStateChanged((user) => {
    setUserId(user ? user.uid : null);
  });

  return (
    <context.Provider value={{ auth, db, userId }}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Accueil />} />
          <Route exact path="/" element={<Accueil />} />
          <Route exact path="/favoris" element={<Favoris />} />
          <Route exact path="/connexion" element={<Connexion />} />
          <Route exact path="/detailsfilm/:movieId" element={<DetailsFilm />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
};

export default App;
