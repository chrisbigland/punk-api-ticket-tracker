import React from 'react'
import styles from './Main.module.scss'
import BeerContainer from '../BeerContainer/BeerContainer'
import FeedbackPanel from '../../components/FeedbackPanel/FeedbackPanel'

const Main = (props) => {

  const { beers, radioValue } = props; // beer data

  return (
    <>
    <div className={styles.mainStyles}>
    </div>
    <BeerContainer beers={beers} radioValue={radioValue}/>
    {/* <FeedbackPanel /> */}
    </>
  )
}

export default Main
