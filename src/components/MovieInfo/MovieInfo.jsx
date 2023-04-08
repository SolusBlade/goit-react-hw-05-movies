import { memo, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useLocation, NavLink } from 'react-router-dom';

import { getMovieByIdapi } from '../../services/moviesApi';
import s from './MovieInfo.module.css';

const getACtiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  // const [genres, setGenres] = useState([]);

  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres = [],
  } = movie;

  const location = useLocation();

  const str = location.pathname;

  const parts = str.split('/');

  // console.log(parts);
  let id = 0;
  if (
    parts[parts.length - 1] === 'cast' ||
    parts[parts.length - 1] === 'reviews'
  ) {
    id = parts[parts.length - 2];
  } else {
    id = parts[parts.length - 1];
  }

  useEffect(() => {
    getMovieByIdapi(id).then(r => {
      setMovie(r);
      // setGenres(r.genres);
    });
  }, [id]);

  return (
    <>
      {poster_path && (
        <div className={s.movieWrap}>
          <div className={s.imgWrap}>
            <img
              src={'https://image.tmdb.org/t/p/original' + poster_path}
              className={s.poster}
              alt=""
            />
            <ul className={s.nav}>
              <li>
                <NavLink
                  className={getACtiveClass}
                  state={location.state}
                  to="cast"
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={getACtiveClass}
                  to="reviews"
                  state={location.state}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={s.movieInfo}>
            <h1 className={s.title}>
              {title} <span>({parseInt(release_date)})</span>{' '}
            </h1>
            <p className={s.text}>User score: {parseInt(vote_average * 10)}%</p>
            <h2 className={s.title}>Overview</h2>
            <p className={s.text}>{overview}</p>
            <h2 className={s.title}>Genres</h2>
            <ul className={s.list}>
              {genres.map(({ name, id }) => (
                <li key={id} className={s.item}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(MovieInfo);
