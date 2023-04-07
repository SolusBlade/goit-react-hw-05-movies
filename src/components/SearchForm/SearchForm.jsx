import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RxMagnifyingGlass } from 'react-icons/rx';

import s from './SearchForm.module.css';

const SearchForm = () => {
  const [input, setInput] = useState('');

  // eslint-disable-next-line
  const [search, setSearch] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    setSearch({ query: input });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <button className={s.searchBtn} type="submit">
        <RxMagnifyingGlass className={s.searchIcon} />
      </button>

      <input
        className={s.searchInput}
        type="text"
        name="input"
        placeholder="Search..."
        onChange={e => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
