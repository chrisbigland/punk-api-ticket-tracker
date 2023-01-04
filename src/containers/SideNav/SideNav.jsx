import React from 'react'
import styles from './SideNav.module.scss'

import SearchBar from '../../components/SearchBar/SearchBar'
import RadioButtons from '../../components/RadioButtons'

const SideNav = (props) => {

  const { updateSearchText } = props;

  return (
    <>
 
    <section className={styles.sideNav}>
    <SearchBar updateSearchText={updateSearchText} placeholder="Search beers..."/>
    <RadioButtons />
    </section>
    </>
  )
}

export default SideNav
