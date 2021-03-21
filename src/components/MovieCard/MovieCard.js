import React from 'react';
import styles from './MovieCard.module.css';
import PropTypes from 'prop-types';
import defaultPoster from '../../assets/emptyPoster.jpg';

const MovieCard = ({ title, poster_path, userScore, overview, genres }) => {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : defaultPoster;
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.thumb}>
        <img className={styles.poster} src={posterUrl} alt={title} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <p>User score: {userScore}%</p>
        <h2>Overview</h2>
        <p>{overview ? overview : 'There is no any overview'}</p>
        <h3>Genres</h3>
        <ul className={styles.genresList}>
          {genres.length > 0 &&
            genres.map(({ id, name }) => (
              <li key={id} className={styles.listItem}>
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  userScore: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieCard;
