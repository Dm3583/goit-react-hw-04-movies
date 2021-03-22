import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';
import defaultProfile from '../../assets/defaultProfile.png';

const Cast = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => {
        const profileImg = profile_path
          ? `https://image.tmdb.org/t/p/w500/${profile_path}`
          : defaultProfile;
        return (
          <li key={id}>
            <div className={styles.thumb}>
              <img src={profileImg} alt={name} className={styles.photo} />
            </div>
            <p>{name}</p>
            {character && <p>Character: {character}</p>}
          </li>
        );
      })}
    </ul>
  );
};

Cast.defaultProps = {
  character: '',
  profile_path: '',
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    }),
  ).isRequired,
};

export default Cast;
