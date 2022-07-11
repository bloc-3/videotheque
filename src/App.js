import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { context } from "./context";

import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Favoris from "./pages/Favoris";
import DetailsFilm from "./pages/DetailsFilm";

// FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhfMviuWeWqdPQAwAJ_5wE_fZK_oRrNrM",
  authDomain: "videotheque-perso.firebaseapp.com",
  projectId: "videotheque-perso",
  storageBucket: "videotheque-perso.appspot.com",
  messagingSenderId: "591632957401",
  appId: "1:591632957401:web:2e06475160459ae9f963c8",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

//db.settings({ timestampsInSnapshots: true });

//const collectionReference = collection(db, "favorite_movies");
// FIREBASE

const App = () => {
  const [userCredentials, setUserCredentials] = useState({});
  const [movieId, setMovieId] = useState({});

  return (
    <context.Provider value={{auth, db, userCredentials, setUserCredentials, movieId, setMovieId}}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Accueil />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path={"detailsfilm"} element={<DetailsFilm />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
};

export default App;
