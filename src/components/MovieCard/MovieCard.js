import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = ({ title, poster_path, userScore, overview, genres }) => (
  <div className={styles.cardWrapper}>
    <div className={styles.thumb}>
      {poster_path && (
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      )}
    </div>
    <div className={styles.info}>
      <h1 className={styles.title}>{title}</h1>
      <p>User score: {userScore}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul className={styles.genresList}>
        {genres.map(({ id, name }) => (
          <li key={id} className={styles.listItem}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default MovieCard;
