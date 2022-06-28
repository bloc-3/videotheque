import React, { useState } from 'react';
import axios from "axios";

const MovieSearchBar = ({ setMoviesData }) => {
  const [search, setSearch] = useState('test');

  const axiosRequest = `https://api.themoviedb.org/3/search/movie?api_key=653b5baee25572caf2d0ff68ef6950b8&query=${search}&language=fr-FR`;

  axios.get(axiosRequest).then((res) => setMoviesData(res.data.results));

  return (
    <div className='movie-search-bar'>
      <div className='movie-search-text-input'>
        <form>
          <input type="text" placeholder="NOM DE FILM" onChange={(e) => setSearch(e.target.value)} />
        </form>
      </div>
      <div className='sort-buttons'>
        <button>TOP</button>
        <button>FLOP</button>
      </div>
    </div>
  );
};

export default MovieSearchBar;