import { memo, useEffect, useState } from 'react';
import { getTrandingMoviesapi } from '../services/moviesApi';
import { NavLink, useLocation } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => {
  const location = useLocation();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrandingMoviesapi().then(r => setMovies(r.results));
  }, []);

  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      <ul className={s.list}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id} className={s.item}>
            <NavLink
              to={'/goit-react-hw-05-movies/movies/' + id}
              className={s.linkWrap}
              state={location}
            >
              <img
                src={'https://image.tmdb.org/t/p/original' + poster_path}
                className={s.poster}
                alt=""
              />
              <div className={s.wrap}>
                <p className={s.text}>{title}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(HomePage);
