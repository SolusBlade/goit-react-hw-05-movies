import { memo } from 'react';

import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import Container from 'components/Container/Container';
import GenresInfo from 'components/GenresInfo/GenresInfo';

const GenresPage = ({ genres, hendleOpenModal }) => {
  return (
    <>
      <GoBackBtn />
      <Container>
        <GenresInfo genres={genres} hendleOpenModal={hendleOpenModal} />
      </Container>
    </>
  );
};

export default memo(GenresPage);
