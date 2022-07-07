import React from "react";
import Navbar from "../components/Navbar";
import Comments from "../components/Comments/Comments";

const DetailCard = ({ movie }) => {
  const dateFormater = (date) => {
    const [year, month, day] = date.split("-");
    return [day, month, year].join("/");
  };

  return (
    <div>
      <Navbar />
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
          <Comments />
        </div>
      </div>
    </div>
  );
};
export default DetailCard;
