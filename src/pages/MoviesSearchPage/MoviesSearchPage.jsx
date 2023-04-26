import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from '../../components/SearchForm/SearchForm';
import s from './MoviesSearchPage.module.css';
import {
  getMovieTrailerapi,
  getSearchedMovieapi,
} from '../../services/moviesApi';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import MovieModal from 'components/MovieModal/MovieModal';
import MovieItem from 'components/MovieItem/MovieItem';
import PaginationComp from 'components/PaginationComp/PaginationComp';

const MoviesSearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [totalItems, setTotalItems] = useState(null);
  const [search, setSearch] = useSearchParams();

  const query = search.get('query');
  const page = search.get('page');
  console.log(page);

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

  const hendleOpenModal = id => {
    getMovieTrailerapi(id).then(r =>
      setModalData(
        r.results.find(movie => movie.name.toLowerCase().includes('trailer'))
          ?.key
      )
    );
  };

  const hendleCloseModal = () => {
    setModalData(null);
  };

  return (
    <>
      <GoBackBtn />
      <SearchForm />
      {movies.length > 0 && (
        <>
          <ul className={s.list}>
            {movies.map(data => (
              <MovieItem
                key={data.id}
                data={data}
                hendleOpenModal={hendleOpenModal}
              />
            ))}
          </ul>
        </>
      )}
      {movies.length > 0 && (
        <PaginationComp
          page={page}
          handlePageChange={handlePageChange}
          totalItems={totalItems}
        />
      )}
      {modalData && (
        <MovieModal modalData={modalData} closeModal={hendleCloseModal} />
      )}
    </>
  );
};

export default MoviesSearchPage;
