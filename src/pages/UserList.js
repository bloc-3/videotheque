import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Card from '../components/Card';

const UserList = () => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        let moviesId = window.localStorage.movie ? window.localStorage.movie.split(",") : [];


        for (let i = 0; i < moviesId.length; i++) {
            axios
                .get(
                `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=653b5baee25572caf2d0ff68ef6950b8&language=fr-FR`
                )
                .then((res) => setListData((listData) => [...listData, res.data]));
        }
    }, []);

    return (
        <div className='user-list-page'>
            <Header />
            <h2>Coup de coeur <span>❤️</span></h2>
            <div className="result">
                {listData.length > 0 ? listData.map((movie) => <Card propsMovie={movie} key={movie.id} />) : <h2>Aucun film n'a été ajouté</h2>}
            </div>
        </div>
    );
};

export default UserList;