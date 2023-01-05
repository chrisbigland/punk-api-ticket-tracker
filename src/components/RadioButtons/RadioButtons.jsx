import React from 'react'
import styles from './RadioButtons.module.scss'

const RadioButtons = (props) => {

  const { allocateCheck } = props;
  
  return (
    <form className={styles.buttons}>
      <input type="radio" id="all-beers" name="beer-filter" value="All Beers" defaultChecked onChange={allocateCheck}/>
      <label htmlFor="all-beers">All Beers</label>

      <input type="radio" id="abv" name="beer-filter" value="High ABV (> 6.0%)" onChange={allocateCheck}/>
      <label htmlFor="high-abv">{`High ABV > 6.0%`}</label>

      <input type="radio" id="classic" name="beer-filter" value="Classic Range" onChange={allocateCheck}/>
      <label htmlFor="classic-range">Classic Range</label>

      <input type="radio" id="acidic" name="beer-filter" value="Acidic (ph < 4)" onChange={allocateCheck}/>
      <label htmlFor="acidic">Acidic {`(ph < 4)`}</label>
    </form>
  )
}

export default RadioButtons
