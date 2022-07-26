import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import MovieDetails from "../components/detailsfilms/MovieDetails";
import Comments from "../components/detailsfilms/Comments";

const DetailsFilm = () => {
  const { movieId } = useParams();

  return (
    <>
      <Navbar />
      <MovieDetails movieId={movieId} />
      <Comments movieId={movieId} />
    </>
  );
};

export default DetailsFilm;
