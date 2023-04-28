import { memo } from 'react';

import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import Container from 'components/Container/Container';
import PersonInfo from 'components/PersonInfo/PersonInfo';

const PersonDetailsPage = ({ genres, hendleOpenModal }) => {
  return (
    <>
      <GoBackBtn />
      <Container>
        <PersonInfo genres={genres} hendleOpenModal={hendleOpenModal} />
      </Container>
    </>
  );
};

export default memo(PersonDetailsPage);
