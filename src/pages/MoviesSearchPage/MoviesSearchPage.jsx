import { useEffect, useState } from 'react';
import {
  useSearchParams,
  NavLink,
  useLocation,
} from 'react-router-dom';


import SearchForm from '../../components/SearchForm/SearchForm';
import s from "./MoviesSearchPage.module.css"
import { getSearchedMovieapi } from '../../services/moviesApi';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';

const MoviesSearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [search] = useSearchParams();

   let location = useLocation();

  const query = search.get('query');

  useEffect(() => {
    if (!query) return;
    getSearchedMovieapi(query)
      .then(r => setMovies(r.results))
      .catch(err => console.log(err));
  }, [query]);



  return (
    <>
      <GoBackBtn />
      <SearchForm />
      {movies.length > 0 && (
        <>
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
      )}
    </>
  );
};

export default MoviesSearchPage;
