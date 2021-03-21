import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MovieDetailsNav.module.css';

const MovieDetailsNav = ({ movieId }) => (
  <div className={styles.navContainer}>
    <p>Additional information</p>
    <ul>
      <li>
        <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
      </li>
      <li>
        <NavLink to={`/movies/${movieId}/review`}>Reviews</NavLink>
      </li>
    </ul>
  </div>
);

export default MovieDetailsNav;
