import React from "react";
import { NavLink } from "react-router-dom";
import Genres from "./Genres";

const MovieCard = ({ movie }) => {
  const isFavorite = true;

  const addToFavorites = () => {
    console.log("ajouté");
  };

  const removeFromFavorites = () => {};

  return (
    <div>
      <NavLink to={{ pathname: "/detailsfilm", movieId: movie.id }}>
        <h2>{movie.title}</h2>
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
              : "./images/Poster.jpg"
          }
          alt={`Affiche du film ${movie.title}`}
        />
        <Genres genre_ids={ movie.genre_ids } />
        <h4>
          {movie.vote_average}/10 <span>⭐</span>
        </h4>
      </NavLink>
      {isFavorite ? (
        <div className="btn" onClick={() => addToFavorites()}>
          Ajouter aux favoris
        </div>
      ) : (
        <div className="btn" onClick={() => removeFromFavorites()}>
          Retirer des favoris
        </div>
      )}
    </div>
  );
};

export default MovieCard;
