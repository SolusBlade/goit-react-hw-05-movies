import { memo, useCallback, useEffect, useState } from 'react';
import {
  getTrandingMoviesapi,
} from '../services/moviesApi';

import s from './HomePage.module.css';
import PaginationComp from 'components/PaginationComp/PaginationComp';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import Container from 'components/Container/Container';

const HomePage = ({ genres, hendleOpenModal }) => {
  const [movies, setMovies] = useState([]);
  const [totalItems, setTotalItems] = useState(null);

  const [search, setSearch] = useSearchParams();
  const page = search.get('page');

  useEffect(() => {
    getTrandingMoviesapi(page).then(r => {
      setMovies(r.results);
      setTotalItems(r.total_results);
    });
  }, [page]);

  const handlePageChange = useCallback(
    pageNumber => {
      setSearch({ page: pageNumber });
    },
    [setSearch]
  );

  return (
    <>
      <Container>
        <h1 className={s.title}>Trending today</h1>
        {movies.length > 0 && (
          <MovieList
            movies={movies}
            hendleOpenModal={hendleOpenModal}
            genres={genres}
          />
        )}
        {movies.length > 0 && (
          <PaginationComp
            page={page}
            handlePageChange={handlePageChange}
            totalItems={totalItems}
          />
        )}
      </Container>
    </>
  );
};

export default memo(HomePage);
