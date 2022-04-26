import React from "react";

const Card = ({ propsMovie }) => {
  const dateFormater = (date) => {
    let [yyyy, mm, dd] = date.split("-");
    return `${dd}/${mm}/${yyyy}`;
    // return [dd, mm, yyyy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    //propsMovie.genre_ids.forEach(element => switch(element) {...});
    for (let i = 0; i < propsMovie.genre_ids.length; i++) {
      switch (propsMovie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.movie ? window.localStorage.movie.split(",") : [];
    if (!storedData.includes(propsMovie.id.toString())) {
      storedData.push(propsMovie.id);
      window.localStorage.movie = storedData;
    } else {
      alert("Film déjà ajouté");
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movie.split(",");
    let newData = storedData.filter((id) => id !== propsMovie.id.toString());
    window.localStorage.movie = newData;
    window.location.reload();
  }
    
  return (
    <div className="card">
      <img
        src={
          propsMovie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + propsMovie.poster_path
            : "./img/poster.jpg"
        }
        alt="Affiche du film"
      />
      <h2>{propsMovie.title}</h2>
      {propsMovie.release_date ? (
        <h5>Sorti le : {dateFormater(propsMovie.release_date)}</h5>
      ) : (
        ""
      )}
      <h4>{propsMovie.vote_average}/10 <span>⭐</span></h4>

      <ul>
        {propsMovie.genre_ids
          ? genreFinder()
          : propsMovie.genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
      </ul>
      {propsMovie.overview ? <h3>Synopsis</h3> : ""}
      <p>{propsMovie.overview}</p>
      {propsMovie.genre_ids ? (
        <div className="btn" onClick={() => addStorage()}>
          Ajouter aux coups de ❤️
        </div>
      ) : (
        <div className="btn" onClick={() => deleteStorage()}>
          Supprimer de la liste
        </div>
      )}
    </div>
  );
};

export default Card;
