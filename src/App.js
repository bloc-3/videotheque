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
  apiKey: "AIzaSyAdE6FYNcx1Nin59iYFFXQ_QKnjmrxaI1s",
  authDomain: "cubetest3-a2c98.firebaseapp.com",
  projectId: "cubetest3-a2c98",
  storageBucket: "cubetest3-a2c98.appspot.com",
  messagingSenderId: "1082971056097",
  appId: "1:1082971056097:web:fdaa24a814a4a43d9994a0",
  measurementId: "G-QERLKMR8BS",
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
