import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getMovieCastapi } from '../../services/moviesApi';
import s from './MovieCast.module.css';
import MovieCastItem from 'components/MovieCastItem/MovieCastItem';

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
        {cast.map(data => (
          <MovieCastItem key={data.id} data={data} />
        ))}
      </ul>
    </div>
  );
};

export default memo(MovieCast);
