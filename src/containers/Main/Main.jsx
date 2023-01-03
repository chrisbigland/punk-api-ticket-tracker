import React from 'react'
import styles from './Main.module.scss'
import BeerContainer from '../BeerContainer/BeerContainer'
import FeedbackPanel from '../../components/FeedbackPanel/FeedbackPanel'

const Main = (props) => {

  const { beers } = props; // beer data

  return (
    <>
    <div className={styles.mainStyles}>

    </div>
    <BeerContainer beers={beers}/>
    {/* <FeedbackPanel /> */}
    </>
  )
}

export default Main
