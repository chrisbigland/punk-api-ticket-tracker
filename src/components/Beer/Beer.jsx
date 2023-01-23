import React from "react";
import styles from "./Beer.module.scss";

const Beer = (props) => {
  const { beer } = props;

  const shortenDescription = (description) =>
    description.length < 300
      ? description
      : description.substring(0, 200) + "...";

  return (
    <div className={styles.card}>
      <img className={styles.img} src={beer.image_url} alt="picture of beer" />
      <h1 className={styles.name}>{beer.name}</h1>
      <p className={styles.description}>
        {shortenDescription(beer.description)}
      </p>

      <div className={styles.stats}>
      <p>{beer.abv}% ABV</p>
      <p>ph{beer.ph}</p>
      <p>First Brewed in:{beer.first_brewed}</p>
      </div>
    </div>
  );
};

export default Beer;
