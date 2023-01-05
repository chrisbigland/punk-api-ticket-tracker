import React from 'react'
import styles from './Main.module.scss'
import BeerContainer from '../BeerContainer/BeerContainer'
import FeedbackPanel from '../../components/FeedbackPanel/FeedbackPanel'

const Main = (props) => {

  const { beers, radioValue } = props; // beer data

  return (
    <>
    <div className={styles.mainStyles}>
      <div className={styles.header}>
        <h1>Brewdog Beer List</h1>
        <p>Use the search bar and filters to take a look through our comprehensive back catalogue of beers!</p>
      </div>
    </div>
    <BeerContainer beers={beers} radioValue={radioValue}/>
    </>
  )
}

export default Main
