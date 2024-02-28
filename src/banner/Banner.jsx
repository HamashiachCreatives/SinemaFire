// Banner.jsx
import React, { useState, useEffect } from 'react';
import styles from './banner.module.css';

const Banner = ({ movie }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movie.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [movie.length]);

  return (
    <div className={styles.carousel}>
      {movie.map((mov, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
        >
          <div className={styles.slideImageContainer}>
            <img
              src={mov.Images[0]}
              alt={mov.Title}
              className={styles.slideImage}
            />
          </div>
          <div className={styles.slideContent}>
            <h1>{mov.Title}</h1>
            <p className={styles.plot}>{formatPlotText(mov.Plot)}</p>
            <h4>Rating: {mov.Rated}</h4>
            <button onClick={() => {}}>Watch</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const formatPlotText = (plot) => {
  const words = plot.split(' ');
  const chunks = [];
  while (words.length > 0) {
    chunks.push(words.splice(0, 10).join(' '));
  }
  return chunks.join(' ');
};

export default Banner;
