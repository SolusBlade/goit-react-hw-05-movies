import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import s from './GenresList.module.css';

const GenresList = ({ genres }) => {
  const location = useLocation();
  return (
    <span className={s.genresList}>
      {genres
        .map(({ id, name }) => (
          <NavLink
            className={s.genresItem}
            key={id}
            to={`/genres/${id}`}
            state={location.state}
          >
            {name}
          </NavLink>
        ))
        .reduce((prev, curr) => [prev, ', ', curr])}
    </span>
  );
};

export default GenresList;
