import React from 'react'
import styles from './SearchBar.module.scss'

const SearchBar = (props) => {

  const { updateSearchText } = props;

  return (
    <>
    <input className={styles.searchBar} type="text" placeholder="Search beers..." onInput={e => updateSearchText(e.target.value)} /> {/* onInput updatesearchText function here set to e.target.value*/}
    </>
  )
}

export default SearchBar
