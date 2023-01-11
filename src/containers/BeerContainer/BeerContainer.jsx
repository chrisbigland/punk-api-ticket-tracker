import React, { useEffect } from "react";
import styles from "./BeerContainer.module.scss";

import Beer from "../../components/Beer/Beer";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";

const BeerContainer = (props) => {
  const { beers, radioValue, matchingBeers, inputLength } = props;

  const mappedBeers =
    matchingBeers.length > 0 ? (
      matchingBeers.map((beer) => {
        return <Beer beer={beer} key={beer.id} />;
      })
    ) : matchingBeers.length === 0 && inputLength > 0 ? (
      <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
    ) : (
      beers.map((beer) => {
        return <Beer beer={beer} key={beer.id} />;
      })
    );

  const getBeersJSX = () => {
    if (radioValue === "all") {
      return mappedBeers;
    } else if (radioValue === "abv" && mappedBeers.length) {
      const highAbvBeers = mappedBeers.filter((beer) => {
        return beer.props.beer.abv > 6;
      });
      return highAbvBeers.length <= 0 ? (
        <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
      ) : (
        highAbvBeers
      );
    } else if (radioValue === "classic" && mappedBeers.length) {
      const classicBeers = mappedBeers.filter((beer) => {
        return beer.props.beer.first_brewed.slice(-4) < 2010;
      });
      return classicBeers.length <= 0 ? (
        <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
      ) : (
        classicBeers
      );
    } else if (radioValue === "acidic" && mappedBeers.length) {
      const acidicBeers = mappedBeers.filter((beer) => {
        return beer.props.beer.ph < 4 && beer.props.beer.ph != " N/A"
      });
      return acidicBeers.length <= 0 ? (
        <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
      ) : (
        acidicBeers
      );
    } else {
      return (
        <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
      );
    }
  };

  useEffect(() => {
    getBeersJSX();
  }, [beers]);

  const beersJsx = getBeersJSX();

  return (
    <>
      <div className={styles.beers}>{beersJsx}</div>
    </>
  );
};

export default BeerContainer;
