import React, { useContext, useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import axios from "axios";

import { context } from "../context";

const FavoriteMovies = () => {
  const { userId, db } = useContext(context);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getFavoriteMovies = async () => {
      const favoriteMoviesCollection = await collection(db, "favorite_movies");
      const q = await query(
        favoriteMoviesCollection,
        where("user_id", "==", userId)
      );
      const querySnapshot = await getDocs(q);
      const moviesIds = await querySnapshot.docs.map(
        (doc) => doc.data().favorite_movies
      );

      const tmdbMovies = await moviesIds.map(async (movieId) => {
        const tmdbApiRequest = `https://api.themoviedb.org/3/movie/${movieId}?api_key=653b5baee25572caf2d0ff68ef6950b8&language=fr-FR`;

        const response = await axios.get(tmdbApiRequest);
        return response.data;
      });
      console.log(tmdbMovies);
      setMovies(tmdbMovies);
    };

    getFavoriteMovies();
  }, []);

  return (
    <>
      <h2>Vos films favoris</h2>
      {userId ? (
        <p>Aucun film dans vos favoris pour l'instant.</p>
      ) : (
        <p>Connectez-vous pour consulter vos films favoris.</p>
      )}
    </>
  );
};

export default FavoriteMovies;
