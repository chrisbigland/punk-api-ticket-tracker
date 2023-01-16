import React from 'react'
import styles from './Main.module.scss'
import BeerContainer from '../BeerContainer/BeerContainer'

const Main = (props) => {

  const { beers, radioValue, matchingBeers, inputLength } = props; 

  return (
    <>
    <div className={styles.mainStyles}>
      <div className={styles.header}>
        <h1 className={styles.title}>Brewdog Beer List</h1>
        <p className={styles.descrip}>Use the search bar and filters to take a look through our comprehensive back catalogue of beers!</p>
      </div>
    </div>
    <BeerContainer beers={beers} radioValue={radioValue} matchingBeers={matchingBeers} inputLength={inputLength}/>
    </>
  )
}

export default Main
