import React from 'react'
import styles from './Beer.module.scss'

const Beer = (props) => {
  const { beer } = props;

  return (
    <div className={styles.card}>
      <img className={styles.img} src={beer.image_url} alt="picture of beer" />
      <h1>{beer.name}</h1>
      <p>Here is all the most important info about the beer</p>
      <p>{beer.abv}% ABV</p>
      <p>ph{beer.ph}</p>
      <p>First Brewed in:{beer.first_brewed}</p>
    </div>
  );
}

export default Beer
