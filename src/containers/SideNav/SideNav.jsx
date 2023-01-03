import React from 'react'
import styles from './SideNav.module.scss'

import SearchBar from '../../components/SearchBar/SearchBar'
import RadioButtons from '../../components/RadioButtons'

const SideNav = () => {
  return (
    <>
 
    <section className={styles.sideNav}>
    <SearchBar />
    <RadioButtons />
    </section>
    </>
  )
}

export default SideNav
