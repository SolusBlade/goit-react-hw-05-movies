import { memo, useEffect, useState } from 'react';
import {
  getMovieTrailerapi,
  getTrandingMoviesapi,
} from '../services/moviesApi';

import s from './HomePage.module.css';
import MovieModal from 'components/MovieModal/MovieModal';
import PaginationComp from 'components/PaginationComp/PaginationComp';
import MovieItem from 'components/MovieItem/MovieItem';

const HomePage = () => {
  
  
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    getTrandingMoviesapi(page).then(r => {
      setMovies(r.results);
      setTotalItems(r.total_results);
    });
  }, [page]);

  const handlePageChange = pageNumber => {
    setPage(pageNumber);
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
      <h1 className={s.title}>Trending today</h1>
      <ul className={s.list}>
        {movies.map(data => (
          <MovieItem
            key={data.id}
            data={data}
            hendleOpenModal={hendleOpenModal}
          />
        ))}
      </ul>
      {movies.length > 0 && (
        <PaginationComp
          page={page}
          handlePageChange={handlePageChange}
          totalItems={totalItems}
        />
      )}
      {modalData && (
        <MovieModal
          modalData={modalData}
          closeModal={hendleCloseModal}
          hendleOpenModal={hendleOpenModal}
        />
      )}
    </>
  );
};

export default memo(HomePage);
