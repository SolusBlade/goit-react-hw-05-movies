import { memo, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useLocation, NavLink, useParams } from 'react-router-dom';

import { getMovieByIdapi } from '../../services/moviesApi';
import s from './MovieInfo.module.css';
import GenresList from 'components/GenresList/GenresList';

const getACtiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const MovieInfo = () => {
  const [movie, setMovie] = useState({});

  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres = [],
    runtime,
  } = movie;

  const location = useLocation();
  const { movieId: id } = useParams();

  useEffect(() => {
    getMovieByIdapi(id).then(r => {
      setMovie(r);
    });
  }, [id]);

  return (
    <>
      {poster_path && (
        <div className={s.movieWrap}>
          <div className={s.imgWrap}>
            <img
              src={
                poster_path !== null
                  ? 'https://image.tmdb.org/t/p/original' + poster_path
                  : 'https://cinemaone.net/images/movie_placeholder.png'
              }
              className={s.poster}
              height={450}
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
            <p className={s.text}>
              <span className={s.textSpan}>Rating: </span>{' '}
              {parseFloat(vote_average).toFixed(1)}
            </p>
            <p className={s.text}>
              <span className={s.textSpan}>Genres:</span>
              <GenresList genres={genres} />
            </p>
            <p className={s.text}>
              <span className={s.textSpan}>Time: </span> {runtime} min
            </p>
            <h2 className={s.title}>Overview</h2>
            <p className={s.textOverview}>{overview}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(MovieInfo);
