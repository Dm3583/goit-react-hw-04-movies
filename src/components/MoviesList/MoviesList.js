import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ films, location }) => (
  <div>
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default withRouter(MoviesList);
