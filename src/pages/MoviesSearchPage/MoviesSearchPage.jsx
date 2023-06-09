import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from '../../components/SearchForm/SearchForm';
// eslint-disable-next-line
import s from './MoviesSearchPage.module.css';
import {
  getSearchedMovieapi,
} from '../../services/moviesApi';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import PaginationComp from 'components/PaginationComp/PaginationComp';
import MovieList from 'components/MovieList/MovieList';

const MoviesSearchPage = ({
  genres,
  hendleOpenModal,
}) => {
  const [movies, setMovies] = useState([]);
  const [totalItems, setTotalItems] = useState(null);
  const [search, setSearch] = useSearchParams();

  const query = search.get('query');
  const page = search.get('page');

  useEffect(() => {
    if (!query) return;
    getSearchedMovieapi(query, page).then(r => {
      setMovies(r.results);
      setTotalItems(r.total_results);
    });
  }, [query, page]);

  const handlePageChange = pageNumber => {
    setSearch({ query, page: pageNumber });
  };

  return (
    <>
      <GoBackBtn />
      <SearchForm />
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
    </>
  );
};

export default MoviesSearchPage;
