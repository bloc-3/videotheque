import React from "react";
import MovieCard from "../MovieCard";

const Movies = ({ sortOrder, movies }) => {

  return (
    <div>
      {movies
        .slice(0, 12)
        .sort((a, b) => {
          switch (sortOrder) {
            case "descending":
              return b.vote_average - a.vote_average;
            case "ascending":
              return a.vote_average - b.vote_average;
            default:
              return 0;
          }
        })
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      }
    </div>
  );
};

export default Movies;
