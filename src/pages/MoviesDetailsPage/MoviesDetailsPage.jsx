import { memo } from 'react';

import { Outlet } from 'react-router-dom';

import MovieInfo from '../../components/MovieInfo/MovieInfo';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';

const MoviesDetailsPage = () => {

  return (
    <>
      <GoBackBtn />
      <MovieInfo />
      <Outlet />
    </>
  );
};

export default memo(MoviesDetailsPage);
