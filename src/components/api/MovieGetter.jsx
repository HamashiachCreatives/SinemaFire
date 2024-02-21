import React, { useEffect } from 'react';
import axios from 'axios';
import styles from './moviegetter.module.css'; // Import CSS module

const options = {
  method: 'GET',
  url: 'https://movies-api14.p.rapidapi.com/shows',
  headers: {
    'X-RapidAPI-Key': 'cbc2087758msh26c1518cce502ebp1b1419jsn9040a1e333e9',
    'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
  },
};

const MovieGetter = ({ movie, setMovie }) => {
  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setMovie(response.data.movies);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovie();
  }, [setMovie]);

  return (
    <div className={styles.container}>
      {movie.map((mov) => (
        <div key={mov._id} className={styles.card}>
          <img src={mov.poster_path} alt="Movie Poster" />
          <div className={styles.content}>
            <h1>{mov.title}</h1>
            <p>{mov.overview}</p>
            <h4>{mov.genres}</h4>
            <button onClick={() => {}}>Watch</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGetter;
