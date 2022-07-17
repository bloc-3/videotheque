import React from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import MovieDetails from "../components/MovieDetails";
import Comments from "../components/Comments/Comments";

const DetailsFilm = () => {
  const location = useLocation();
  const movieId = location.state.movieId;

  return (
    <>
      <Navbar />
      <MovieDetails movieId={movieId} />
      <Comments movieId={movieId} />
    </>
  );
};

export default DetailsFilm;
