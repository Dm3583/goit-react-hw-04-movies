import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './MovieDetailsNav.module.css';

const MovieDetailsNav = ({ movieId, location }) => {
  const locationFrom = location.state.from;
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

export default withRouter(MovieDetailsNav);

//             to={{
//pathname: `/movies/${id}`,
//  state: {
//  from: location,
//              },
//            }}

// to={`/movies/${movieId}/cast`}

// to={`/movies/${movieId}/review`}
