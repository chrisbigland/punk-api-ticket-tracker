import React from 'react'
import styles from './RadioButtons.module.scss'

const RadioButtons = (props) => {

  const { updateBeerJSX } = props;
  
  return (
    <form className={styles.buttons}>
      <input type="radio" id="abv" name="beer-filter" value="High ABV (> 6.0%)" onChange={updateBeerJSX}/>
      <label htmlFor="high-abv">{`High ABV > 6.0%`}</label>
      <input type="radio" id="classic" name="beer-filter" value="Classic Range" onChange={updateBeerJSX}/>
      <label htmlFor="classic-range">Classic Range</label>
      <input type="radio" id="acidic" name="beer-filter" value="Acidic (ph < 4)" onChange={updateBeerJSX}/>
      <label htmlFor="acidic">Acidic {`(ph < 4)`}</label>
    </form>
  )
}

export default RadioButtons
