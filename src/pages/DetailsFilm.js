import React from "react";

import Navbar from "../components/Navbar";
import MovieDetails from "../components/MovieDetails";
import Comments from "../components/Comments/Comments";

const DetailsFilm = ({ movieId }) => {

  return (
    <div>
      <Navbar />
      <MovieDetails movieId={ movieId } />
      <Comments />
    </div>
  );
};

export default DetailsFilm;
