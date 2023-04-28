import { memo, useCallback, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import s from './GenresInfo.module.css';
import PaginationComp from 'components/PaginationComp/PaginationComp';
import MovieList from 'components/MovieList/MovieList';
import { getMoviesByGenreapi } from 'services/moviesApi';

const GenresInfo = ({ genres, hendleOpenModal }) => {
  const [movies, setMovies] = useState([]);
  const [totalItems, setTotalItems] = useState(null);
  const [search, setSearch] = useSearchParams();

  const page = search.get('page');
  const { genreId: id } = useParams();

  useEffect(() => {
    getMoviesByGenreapi(id, page).then(r => {
      setMovies(r.results);
      setTotalItems(r.total_results);
    });
  }, [page, id]);

  const handlePageChange = useCallback(
    pageNumber => {
      setSearch({ page: pageNumber });
    },
    [setSearch]
  );

  function getGenreName(id) {
    const match = genres.find(item => item.id === Number(id));
    return match ? match.name : null;
  }

  return (
    <>
      <h1 className={s.title}>{getGenreName(id)}</h1>
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

export default memo(GenresInfo);
