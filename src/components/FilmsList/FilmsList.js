import React from 'react';
import { NavLink } from 'react-router-dom';

const FilmsList = ({ films }) => (
  <div>
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`movies/${id}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default FilmsList;

//to={{
//pathname: `movies/${id}`,
//search: '?query=adventure',

// state: { from: '/dashboard' },
// }}>
