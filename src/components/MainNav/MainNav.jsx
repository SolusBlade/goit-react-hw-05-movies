import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';
import s from './MainNav.module.css';

const getACtiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const MainNav = () => {
  const location = useLocation();

  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              className={getACtiveClass}
              to="/goit-react-hw-05-movies"
              end
            >
              Home
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              className={getACtiveClass}
              to="/goit-react-hw-05-movies/movies"
              state={location}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
