import { useState, useEffect } from "react";

import axios from "axios";

const MovieDetails = ({ movieId }) => {
  const [isPending, setIsPending] = useState(false);
  const [movie, setMovie] = useState({});

  const dateFormater = (date) => {
    const [year, month, day] = date.split("-");

    return [day, month, year].join("/");
  };

  useEffect(() => {
    setIsPending(true);
    const tmdbApiRequest = `https://api.themoviedb.org/3/movie/${movieId}?api_key=653b5baee25572caf2d0ff68ef6950b8&language=fr-FR`;

    axios
      .get(tmdbApiRequest)
      .then((res) => {
        setMovie(res.data);
        setIsPending(false);
      })
      .catch((error) => {
        console.log(`Impossible d'obtenir le film ${movieId}.`);
        setIsPending(false);
      });
  }, []);

  return (
    <>
      {isPending && <p>Chargement des données du film {movieId}</p>}
      {movie ? (
        <div className="movieDetails">
          <div className="cardFilmDe">
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
            <div className="movieInfo">
              {movie.genres ? (
                <ul className="genres">
                  {movie.genres.map((genre) => {
                    return (
                      <li key={genre.id} className="genre">
                        {genre.name}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                ""
              )}
              {movie.release_date ? (
                <p className="release">
                  Sorti le : {dateFormater(movie.release_date)}
                </p>
              ) : (
                ""
              )}
              <p className="stars">
                {movie.vote_average}/10 <span>⭐</span>
              </p>
              {/* <p className="heart">❤️</p> */}
            </div>
          </div>

          <div className="synopsisDiv">
            {movie.overview ? (
              <div>
                <h1>Synopsis</h1>
                <p className="synopsis">{movie.overview}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default MovieDetails;
