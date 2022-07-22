import React, { useState } from 'react';

import MovieSearchBar from "./MovieSearchBar";
import Movies from "../common/Movies";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("descending");

  return (
    <>
      <MovieSearchBar setMovies={setMovies} setSortingOrder={setSortingOrder} />
      <Movies sortingOrder={sortingOrder} movies={movies} />
    </>
  );
};

export default Main;