import { memo, useEffect, useState } from 'react';

import s from './PersonInfo.module.css';
import {
  getPersonDetailsapi,
  getPersonImagesapi,
  getPersonMoviesapi,
} from 'services/moviesApi';
import { convertDate } from 'services/convertDate';
import SwiperComp from 'components/Swiper/Swiper';
import MovieItem from 'components/MovieItem/MovieItem';
import { useParams } from 'react-router-dom';

const PersonInfo = ({ genres, hendleOpenModal }) => {
  const [person, setPerson] = useState({});
  const [personImages, setPersonImages] = useState([]);
  const [personMovies, setPersonMovies] = useState([]);
  const [visibleItems, setVisibleItems] = useState(4);

  const handleShowMore = () => {
    setVisibleItems(() => personMovies.length);
  };

  const {
    profile_path,
    name,
    birthday,
    known_for_department,
    place_of_birth,
    gender,
    biography,
  } = person;

  const { personId: id } = useParams();

  useEffect(() => {
    getPersonDetailsapi(id).then(r => {
      setPerson(r);
    });
    getPersonMoviesapi(id).then(r => {
      setPersonMovies(r.cast);
    });
    getPersonImagesapi(id).then(r => {
      setPersonImages(r.profiles);
    });
  }, [id]);

  const getGender = n => {
    switch (n) {
      case 1:
        return 'Female';
      case 2:
        return 'Male';
      case 3:
        return 'Other';
      default:
        return 'Unknown';
    }
  };

  return (
    <>
      {profile_path && (
        <>
          <div className={s.movieWrap}>
            <div className={s.imgWrap}>
              <img
                src={
                  profile_path !== null
                    ? 'https://image.tmdb.org/t/p/original' + profile_path
                    : 'https://cinemaone.net/images/movie_placeholder.png'
                }
                className={s.poster}
                alt=""
              />
            </div>
            <div className={s.movieInfo}>
              <h1 className={s.title}>{name}</h1>
              <p className={s.text}>
                <span className={s.textSpan}>Known for: </span>
                {known_for_department}
              </p>
              <p className={s.text}>
                <span className={s.textSpan}>Birthday: </span>
                {convertDate(birthday)}
              </p>
              <p className={s.text}>
                <span className={s.textSpan}>Gender: </span>
                {getGender(gender)}
              </p>
              <p className={s.text}>
                <span className={s.textSpan}>Place of Birth: </span>
                {place_of_birth}
              </p>
              <p className={s.textBio}>
                <span className={s.textSpan}>Biography: </span>
                {biography}
              </p>
            </div>
          </div>
          <div>
            <SwiperComp images={personImages} />
            {personMovies.length > 0 && genres.length > 0 && (
              <>
                <ul className={s.list}>
                  {personMovies
                    .sort((a, b) => b.vote_average - a.vote_average)
                    .slice(0, visibleItems)
                    .map(data => (
                      <MovieItem
                        key={data.id}
                        data={data}
                        genres={genres}
                        hendleOpenModal={hendleOpenModal}
                      />
                    ))}
                </ul>
                {visibleItems < personMovies.length && (
                  <button className={s.showMoreBtn}  onClick={handleShowMore}>
                    Show more
                  </button>
                )}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default memo(PersonInfo);
