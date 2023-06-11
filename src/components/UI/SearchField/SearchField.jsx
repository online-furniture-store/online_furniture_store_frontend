import { useState } from 'react';
import styles from './SearchField.module.css';

function SearchField() {
  const [searchValue, setSearchValue] = useState();
  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
  };
  return (
    <form className={styles.search}>
      <label
        htmlFor="searchField"
        className={styles.label}
        alt="Иконка лупа"
      />
      <input
        className={styles.input}
        id="searchField"
        type="search"
        autoComplete="off"
        value={searchValue || ''}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchField;
