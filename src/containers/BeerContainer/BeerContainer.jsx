import React from "react";
import styles from "./BeerContainer.module.scss";

import Beer from "../../components/Beer/Beer";

const BeerContainer = (props) => {
  const { beers, radioValue } = props;

  const mappedBeers = beers.map((beer) => {
    return <Beer beer={beer} key={beer.id} />;
  });

  const beersJSX =
    radioValue === "abv"
      ? mappedBeers.filter((beer) => {
          return beer.props.beer.abv > 6;
        })
      : radioValue === "classic"
      ? mappedBeers.filter((beer) => {
          return beer.props.beer.first_brewed.slice(3) < 2010;
        })
      : radioValue === "acidic"
      ? mappedBeers.filter((beer) => {
          return beer.props.beer.ph < 4;
        })
      : mappedBeers;

  return (
    <>
      <div className={styles.beers}>{beersJSX}</div>
    </>
  );
};

export default BeerContainer;
