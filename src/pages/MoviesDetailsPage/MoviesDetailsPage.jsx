import { memo } from 'react';

import { Outlet } from 'react-router-dom';

import MovieInfo from '../../components/MovieInfo/MovieInfo';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import Container from 'components/Container/Container';

const MoviesDetailsPage = () => {

  return (
    <>
      <GoBackBtn />
      <Container>
        <MovieInfo />
        <Outlet />
      </Container>
    </>
  );
};

export default memo(MoviesDetailsPage);
