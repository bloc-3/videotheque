import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Favoris from "./pages/Favoris";
import DetailCard from "./pages/DetailCard";

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
  appId: "1:591632957401:web:2e06475160459ae9f963c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

//db.settings({ timestampsInSnapshots: true });

//const collectionReference = collection(db, "nom_collection");
// FIREBASE

const App = () => {
  const [userCredentials, setUserCredentials] = useState({});
  const [movieId, setMovieId] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Accueil />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion auth={ auth} setUserCredentials={ setUserCredentials } />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path={"detailsfilm"} element={<DetailCard movieId={ movieId } />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
