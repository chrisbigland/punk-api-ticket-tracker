import React, { useEffect } from "react";
import styles from "./BeerContainer.module.scss";

import Beer from "../../components/Beer/Beer";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";

const BeerContainer = (props) => {
  const { beers, radioValue } = props;

  const mappedBeers = beers.map((beer) => { // could do it as a ternary here? 
    // mappedBeers = matchingBeers ? matchingBeers.map((beer) => { return <Beer beer={beer} key={beer.id} />  } : beers.map((beer) => { return <Beer beer={beer} key={beer.id} />;   }); )

    return <Beer beer={beer} key={beer.id} />;
  });




  const getBeersJSX = () => {         // add in a section here to factor in a new matching beers state. if matching beers 
    if (radioValue === "all" && beers.length) { 
      return mappedBeers;
    } else if (radioValue === "abv" && beers.length) {
      const highAbvBeers = mappedBeers.filter((beer) => { 
        return beer.props.beer.abv > 6;
      });
      return highAbvBeers.length <= 0 ? (
        <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
      ) : (
        highAbvBeers
      );
    } else if (radioValue === "classic" && beers.length) {
      const classicBeers = mappedBeers.filter((beer) => {
        return beer.props.beer.first_brewed.slice(3) < 2010;
      });
      return classicBeers.length <= 0 ? (
        <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
      ) : (
        classicBeers
      );
    } else if (radioValue === "acidic" && beers.length) {
      const acidicBeers = mappedBeers.filter((beer) => {
        return beer.props.beer.ph < 4;
      });
      return acidicBeers.length <= 0 ? (
        <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
      ) : (
        acidicBeers
      );
    } else {
      console.log("we are in the else clause")
      return (
        <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
   
        
      );
    }
  };

  useEffect(() => {
    // console.log(beers)
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