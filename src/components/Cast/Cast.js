import React from 'react';
import styles from './Cast.module.css';

const Cast = ({ cast }) => (
  <ul>
    {cast.map(({ id, name, character, profile_path }) => (
      <li key={id}>
        <div className={styles.thumb}>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
              className={styles.photo}
            />
          )}
        </div>
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    ))}
  </ul>
);

export default Cast;
