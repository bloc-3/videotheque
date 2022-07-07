import React, { useState } from 'react';
import MovieSearchBar from "./MovieSearchBar";
import Movies from "./Movies";

// contenu de la page d'accueil sans la navbar
const Main = () => {
  const [movies, setMovies] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("descending");

  return (
    <div>
      <MovieSearchBar setMovies={setMovies} setSortingOrder={setSortingOrder} />
      <Movies sortingOrder={sortingOrder} movies={movies} />
    </div>
  );
};

export default Main;