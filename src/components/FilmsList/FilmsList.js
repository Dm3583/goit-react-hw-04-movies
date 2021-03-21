import React from 'react';

const FilmsList = ({ films }) => (
  <div>
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  </div>
);

export default FilmsList;
