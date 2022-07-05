import React, { useState } from 'react';
import MovieSearchBar from "./Main/MovieSearchBar";
import Movies from "./Main/Movies";

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