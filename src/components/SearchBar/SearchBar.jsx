import React from 'react'
import styles from './SearchBar.module.scss'

const SearchBar = (props) => {
  const { updateSearchText, placeholder } = props;

  return (
    <>
      <input
        className={styles.searchBar}
        type="text"
        placeholder={placeholder}
        onInput={(e) => updateSearchText(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
