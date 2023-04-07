import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getMovieCastapi } from '../../services/moviesApi';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const [cast, setCast] = useState([]);

  const location = useLocation();

  const str = location.pathname;

  const parts = str.split('/');

  const id = parts[parts.length - 2];

  useEffect(() => {
    getMovieCastapi(id).then(r => {
      setCast(r.cast);
      // setGenres(r.genres);
    });
  }, [id]);

  return (
    <div className={s.castWrap}>
      <ul className={s.list}>
        {cast.map(({ name, profile_path, character, id }) => (
          <li key={id} className={s.item}>
            <img
              src={
                profile_path !== null
                  ? 'https://image.tmdb.org/t/p/original' + profile_path
                  : 'https://www.revixpert.ch/app/uploads/portrait-placeholder.jpg'
              }
              className={s.poster}
              width={200}
              height={300}
              alt=""
            />
            <div className={s.wrap}>
              <p className={s.text}>{name}</p>
              <p className={s.text}>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(MovieCast);
