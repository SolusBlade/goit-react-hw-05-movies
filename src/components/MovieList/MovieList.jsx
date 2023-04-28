import { memo } from 'react';

import s from './MovieList.module.css';
import MovieItem from 'components/MovieItem/MovieItem';

const MovieList = ({ movies, hendleOpenModal, genres }) => {
  return (
    <>
      {genres.length > 0 && (
        <ul className={s.list}>
          {movies.map(data => (
            <MovieItem
              key={data.id}
              data={data}
              genres={genres}
              hendleOpenModal={hendleOpenModal}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default memo(MovieList);
