import React from "react";

import Navbar from "../components/Navbar";
import MovieDetails from "../components/MovieDetails";
import Comments from "../components/Comments/Comments";

const DetailsFilm = () => {

  return (
    <div>
      <Navbar />
      <MovieDetails />
      <Comments />
    </div>
  );
};

export default DetailsFilm;
