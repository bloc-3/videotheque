import { NavLink } from "react-router-dom";

import Genres from "./Genres";

const MovieCard = ({ movie }) => {
  return (
    <div className="cards">
      <NavLink to={`/detailsfilm/${movie.id}`} className="card">
        <div className="cardHeader">
          <h2 className="cardTitle">{movie.title}</h2>
        </div>
        <div className="cardImage">
          <img
            className="imgResponsive"
            src={
              movie.poster_path
                ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
                : "./images/Poster.jpg"
            }
            alt={`Affiche du film ${movie.title}`}
          />
        </div>
        <div className="cardBody">
          <Genres genre_ids={movie.genre_ids} className="genres" />
          <h4>{movie.vote_average}/10 ⭐</h4>
        </div>
      </NavLink>
    </div>
  );
};

export default MovieCard;
