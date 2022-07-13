import React from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import MovieDetails from "../components/MovieDetails";
import Comments from "../components/Comments/Comments";

const DetailsFilm = () => {
  const location = useLocation();
  console.log(location);
  const movieId = location.state.movieId;

  return (
    <div>
      <Navbar />
      <MovieDetails movieId={movieId} />
      {/* <Comments movieId={ movieId } /> */}
    </div>
  );
};

export default DetailsFilm;
