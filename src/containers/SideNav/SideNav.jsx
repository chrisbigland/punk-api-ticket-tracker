import React from 'react'
import styles from './SideNav.module.scss'

import SearchBar from '../../components/SearchBar/SearchBar'
import RadioButtons from '../../components/RadioButtons'

const SideNav = (props) => {

  const { updateSearchText, setRadioValue } = props;

  const allBeers = document.querySelector("#all-beers");
  const aBV = document.querySelector("#abv");
  const classic = document.querySelector("#classic");
  const acidic = document.querySelector("#acidic");

  const allocateCheck = () => {
    if (allBeers.checked) {
      setRadioValue("all");
    } else if (aBV.checked) {
      setRadioValue("abv");
    } else if (classic.checked) {
      setRadioValue("classic");
    } else if (acidic.checked) {
      setRadioValue("acidic");
    }
  };

  return (
    <>
      <section className={styles.sideNav}>
        <div className={styles.searchBar}>
          <SearchBar
            updateSearchText={updateSearchText}
            placeholder="Search beers..."
          />
        </div>
        <RadioButtons allocateCheck={allocateCheck} />
      </section>
    </>
  );
}

export default SideNav
