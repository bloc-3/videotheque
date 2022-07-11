import React, { useState } from "react";
import axios from "axios";

import { context } from "../context";

const MovieDetails = (props) => {
  const movieId = props.location.movieId;
  const [movie, setMovie] = useState({});

  const axiosRequest = `https://api.themoviedb.org/3/movie/${movieId}?api_key=653b5baee25572caf2d0ff68ef6950b8&language=fr-FR`;

  const dateFormater = (date) => {
    const [year, month, day] = date.split("-");
    return [day, month, year].join("/");
  };

  axios
    .get(axiosRequest)
    .then((res) => setMovie(res.data))
    .catch((error) => {
      console.log("Impossible d'obtenir le film sélectionné.", movieId);
    });

  return (
    <div className="detail_page">
      <div className="detail_part_left">
        <h1 className="title">{movie.title}</h1>
        <div className="film_poster">
          <img
            className="resp"
            src={
              movie.poster_path
                ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
                : "./images/Poster.jpg"
            }
            alt={`Affiche du film ${movie.title}`}
          />
        </div>
        {movie.release_date ? (
          <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
        ) : (
          ""
        )}
        <div className="buttons">
          <button>Science-fiction</button>
          <button>Divertissement</button>
        </div>
        <p className="stars">
          {movie.vote_average}/10 <span>⭐</span>
        </p>
        <p className="heart">❤️</p>
      </div>
      <div className="detail_part_right">
        <div className="movie_detail">
          {movie.overview ? (
            <div>
              <h3>Synopsis</h3>
              <p>{movie.overview}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
