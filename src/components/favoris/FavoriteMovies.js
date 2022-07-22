import React, { useContext, useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import axios from "axios";

import { context } from "../../context";

const FavoriteMovies = () => {
  const { db, userId } = useContext(context);

  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState(false);

  useEffect(() => {
    const getFavoriteMoviesIds = async () => {
      const favoriteMoviesCollection = await collection(db, "favorite_movies");

      const q = await query(
        favoriteMoviesCollection,
        where("user_id", "==", userId)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 1) {
        const documents = querySnapshot.docs;
        return await documents[0].data().favorite_movies;
      }

      return [];
    };

    const getFavoriteMovies = async (moviesIds) => {
      if (!moviesIds) {
        return null;
      } else {
        const _movies = await Promise.all(
          moviesIds.map(async (movieId) => {
            const tmdbApiRequest = `https://api.themoviedb.org/3/movie/${movieId}?api_key=653b5baee25572caf2d0ff68ef6950b8&language=fr-FR`;
            return await axios.get(tmdbApiRequest);
          })
        );
        return _movies;
      }
    };

    // if (moviesIds) {
    //   let moviesTemp = [];
    //   for (const movieId of moviesIds) {
    //     const tmdbApiRequest = `https://api.themoviedb.org/3/movie/${movieId}?api_key=653b5baee25572caf2d0ff68ef6950b8&language=fr-FR`;
    //     const response = await axios.get(tmdbApiRequest);
    //     await moviesTemp.push(response.data);
    //   }
    //   setMovies(moviesTemp);
    //console.log(movies);

    // const arr = [1, 2, 3];

    // const asyncRes = await Promise.all(arr.map(async (i) => {
    //   await sleep(10);
    //   return i + 1;
    // }));
    // }

    const moviesIds = getFavoriteMoviesIds();
    console.log(moviesIds);
    const _movies = getFavoriteMovies(moviesIds);
    console.log(_movies);
  }, [userId, db]);

  const getJsxContent = () => {
    if (userId) {
      if (movies.length === 0) {
        return <p>Aucun film dans vos favoris pour l'instant.</p>;
      } else {
        // return ({movies
        //   .sort((a, b) => {
        //     switch (sortingOrder) {
        //       case "descending":
        //         return b.vote_average - a.vote_average;
        //       case "ascending":
        //         return a.vote_average - b.vote_average;
        //       default:
        //         return 0;
        //     }
        //   })
        // .map((movie) => (
        //   <MovieCard key={movie.id} movie={movie} />
        // ))})
        return <p>liste de films</p>;
      }
    } else {
      return <p>Connectez-vous pour consulter vos films favoris.</p>;
    }
  };

  return (
    <>
      <h2>Vos films favoris</h2>

      {/*       {getJsxContent()} */}
    </>
  );
};

export default FavoriteMovies;
