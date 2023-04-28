import { memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import s from './MovieCastItem.module.css';
import { trimCharacterString } from 'services/trimString';

const MovieCastItem = ({ data: { name, profile_path, character, id } }) => {
  const location = useLocation();

  return (
    <li className={s.item}>
      <NavLink to={'/person/' + id} className={s.linkWrap} state={location}>
        <img
          src={
            profile_path !== null
              ? 'https://image.tmdb.org/t/p/original' + profile_path
              : 'https://www.revixpert.ch/app/uploads/portrait-placeholder.jpg'
          }
          className={s.poster}
          width={200}
          height={300}
          alt=""
        />
        <div className={s.wrap}>
          <p className={s.textTitle}>{name}</p>
          <p className={s.text}>{trimCharacterString(character)}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default memo(MovieCastItem);
