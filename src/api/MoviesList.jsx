import React from 'react'
import styles from './movielist.module.css'

const MoviesList = ({movie}) => {
  return (
    <div className={styles.container}>
      {movie.map((mov,id) => (
        <div key={id} className={styles.card}>
           <img src={mov.Images[0]} alt={mov.Title} />
          <div className={styles.content}>
            <h1>{mov.Title}</h1>
            <p>{mov.Plot}</p>
            <h4>Rating:{mov.Rated}</h4>
            <button onClick={() => {}}>Watch</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesList
