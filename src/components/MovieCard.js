import React from "react";

const MovieCard = ({ movie }) => {
  const dateFormater = (date) => {
    const [year, month, day] = date.split("-");
    return [day, month, year].join("/");
  };

  const genreFinder = () => {
    const genres = [];

    movie.genre_ids.forEach((element) => {
      switch (element) {
        case 28:
          genres.push(`Action`);
          break;
        case 12:
          genres.push(`Aventure`);
          break;
        case 16:
          genres.push(`Animation`);
          break;
        case 35:
          genres.push(`Comédie`);
          break;
        case 80:
          genres.push(`Policier`);
          break;
        case 99:
          genres.push(`Documentaire`);
          break;
        case 18:
          genres.push(`Drame`);
          break;
        case 10751:
          genres.push(`Famille`);
          break;
        case 14:
          genres.push(`Fantasy`);
          break;
        case 36:
          genres.push(`Histoire`);
          break;
        case 27:
          genres.push(`Horreur`);
          break;
        case 10402:
          genres.push(`Musique`);
          break;
        case 9648:
          genres.push(`Mystère`);
          break;
        case 10749:
          genres.push(`Romance`);
          break;
        case 878:
          genres.push(`Science-fiction`);
          break;
        case 10770:
          genres.push(`Téléfilm`);
          break;
        case 53:
          genres.push(`Thriller`);
          break;
        case 10752:
          genres.push(`Guerre`);
          break;
        case 37:
          genres.push(`Western`);
          break;
        default:
          break;
      }
    });

    return genres.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.movie
      ? window.localStorage.movie.split(",")
      : [];

    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movie = storedData;
    } else {
      alert("Film déjà ajouté");
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movie.split(",");
    let newData = storedData.filter((id) => id !== movie.id.toString());

    window.localStorage.movie = newData;
    window.location.reload();
  };

  const addToFavorites = () => {
    console.log("ajouté");
  };
  
  const removeFromFavorites = () => {};

  return (
    <div>
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "./images/Poster.jpg"
        }
        alt={`Affiche du film ${movie.title}`}
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
      ) : (
        ""
      )}
      <h4>
        {movie.vote_average}/10 <span>⭐</span>
      </h4>

      <ul>
        {movie.genre_ids
          ? genreFinder()
          : movie.genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
      </ul>
      {movie.overview ? (
        <div>
          <h3>Synopsis</h3>
          <p>{movie.overview}</p>
        </div>
      ) : (
        ""
      )}

      {movie.genre_ids ? (
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
