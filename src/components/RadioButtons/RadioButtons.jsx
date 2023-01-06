import React from 'react'
import styles from './RadioButtons.module.scss'

const RadioButtons = (props) => {

  const { allocateCheck } = props;
  
  return (
    <form className={styles.buttons}>
      <label htmlFor="all-beers">
      <input type="radio" id="all-beers" name="beer-filter" value="All Beers" defaultChecked onChange={allocateCheck}/>
      All Beers</label>

      <label htmlFor="high-abv">
      <input type="radio" id="abv" name="beer-filter" value="High ABV (> 6.0%)" onChange={allocateCheck}/>
      {`High ABV > 6.0%`}</label>
      
      <label htmlFor="classic-range">
      <input type="radio" id="classic" name="beer-filter" value="Classic Range" onChange={allocateCheck}/>
      Classic Range</label>

      <label htmlFor="acidic">
      <input type="radio" id="acidic" name="beer-filter" value="Acidic (ph < 4)" onChange={allocateCheck}/>
      Acidic {`(ph < 4)`}</label>
    </form>
  )
}

export default RadioButtons
