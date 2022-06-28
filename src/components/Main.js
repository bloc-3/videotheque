import React, { useState } from 'react';
import MovieSearchBar from "./Main/MovieSearchBar";
import Movies from "./Main/Movies";

// contenu de la page d'accueil sans la navbar
const Main = () => {
  const [movies, setMovies] = useState([]);


  return (
    <div>
      <MovieSearchBar setMoviesData={setMovies} />
      <Movies sortOrder={"descending"} movies={movies} />
    </div>
  );
};

export default Main;