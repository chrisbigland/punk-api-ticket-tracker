import React from 'react'
import styles from './RadioButtons.module.scss'

const RadioButtons = () => {
  return (
    <form className={styles.buttons}>
      <input type="radio" id="abv" name="beer-filter" value="High ABV (> 6.0%)" />
      <label for="high-abv">{`High ABV > 6.0%`}</label>
      <input type="radio" id="classic" name="beer-filter" value="Classic Range" />
      <label for="classic-range">Classic Range</label>
      <input type="radio" id="acidic" name="beer-filter" value="Acidic (ph < 4)" />
      <label for="acidic">Acidic {`(ph < 4)`}</label>
    </form>
  )
}

export default RadioButtons
