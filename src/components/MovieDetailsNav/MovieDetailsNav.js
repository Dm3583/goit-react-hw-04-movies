import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieDetailsNav.module.css';

const MovieDetailsNav = ({ movieId, location }) => {
  const locationFrom = location && location.state ? location.state.from : '/';

  return (
    <div className={styles.navContainer}>
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: `/movies/${movieId}/cast`,
              state: {
                from: locationFrom,
              },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `/movies/${movieId}/review`,
              state: {
                from: locationFrom,
              },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

MovieDetailsNav.defaultProps = {
  location: null,
};

MovieDetailsNav.propTypes = {
  movieId: PropTypes.string.isRequired,
  location: PropTypes.object,
};

export default withRouter(MovieDetailsNav);
