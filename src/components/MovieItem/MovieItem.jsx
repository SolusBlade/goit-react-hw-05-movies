import { memo } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { NavLink, useLocation } from 'react-router-dom';

import s from './MovieItem.module.css';
import { trimString } from 'services/trimString';

const MovieItem = ({
  data: { id, title, poster_path, vote_average, release_date },
  hendleOpenModal,
}) => {
  const location = useLocation();
  return (
    <li className={s.item}>
      <button className={s.btn} onClick={() => hendleOpenModal(id)}>
        <BsFillPlayFill className={s.btnIcon} />
      </button>
      <NavLink
        to={'/goit-react-hw-05-movies/movies/' + id}
        className={s.linkWrap}
        state={location}
      >
        <p className={s.rating}>{vote_average.toFixed(1)}</p>
        <img
          src={
            poster_path !== null
              ? 'https://image.tmdb.org/t/p/original' + poster_path
              : 'https://cinemaone.net/images/movie_placeholder.png'
          }
          className={s.poster}
          height={300}
          alt=""
        />
        <div className={s.wrap}>
          <p className={s.textTitle}>{trimString(title)}</p>
          <p className={s.text}>
            {isNaN(parseInt(release_date)) ? 'Unknown' : parseInt(release_date)}
          </p>
        </div>
      </NavLink>
    </li>
  );
};

export default memo(MovieItem);
