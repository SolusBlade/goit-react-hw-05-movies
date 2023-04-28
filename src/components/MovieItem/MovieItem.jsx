import { memo } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { NavLink, useLocation } from 'react-router-dom';

import s from './MovieItem.module.css';
import { trimTitleString, trimOverviewString } from 'services/trimString';
import PercentageBar from 'components/PercentageBar/PercentageBar';

const MovieItem = ({
  data: {
    id,
    title,
    poster_path,
    vote_average,
    release_date,
    overview,
    genre_ids,
  },
  hendleOpenModal,
  genres,
}) => {
  const location = useLocation();

  const genresNames = genre_ids.map(id => {
    const match = genres.find(item => item.id === id);
    return match ? match.name : null;
  });

  return (
    <li className={s.flipCard}>
      <div className={s.flipCardInner}>
        <div className={s.flipCardFront}>
          <img
            src={
              poster_path !== null
                ? 'https://image.tmdb.org/t/p/original' + poster_path
                : 'https://cinemaone.net/images/movie_placeholder.png'
            }
            className={s.poster}
            height={375}
            alt={`${title}'s poster`}
          />
          <div className={s.wrap}>
            <p className={s.textTitle}>{trimTitleString(title)}</p>
            <p className={s.text}>
              {isNaN(parseInt(release_date))
                ? 'Unknown'
                : parseInt(release_date)}
            </p>
          </div>
        </div>
        <div className={s.flipCardBack}>
          <button className={s.btn} onClick={() => hendleOpenModal(id)}>
            <BsFillPlayFill className={s.btnIcon} />
          </button>
          <PercentageBar rating={vote_average} />
          <NavLink
            to={'/movies/' + id}
            className={s.linkWrap}
            state={location}
          >
            <p className={s.textTitleBack}>{title}</p>
            <p className={s.textBack}>{trimOverviewString(overview)}</p>
            <p className={s.textBackGenres}>
              <span className={s.textBackSpan}>Genres:</span>{' '}
              {genresNames.join(', ')}
            </p>
          </NavLink>
          {/* Спину потом сюда кинуть нужно */}
        </div>
      </div>
    </li>
  );
};

export default memo(MovieItem);

