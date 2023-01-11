import React, { useEffect } from "react";
import styles from "./BeerContainer.module.scss";

import Beer from "../../components/Beer/Beer";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";

const BeerContainer = (props) => {
  const { beers, radioValue, matchingBeers, inputLength } = props;

  const mappedBeers =
    matchingBeers.length > 0 ? ( // are there any matching beers? (doesn't confirm whether someone's tried to search) - maybe put '&& inputLength > 0' at end here
      matchingBeers.map((beer) => {
        console.log("matching beers get mapped as matchingBeers.length > 0")
        // if so, return those beers
        return <Beer beer={beer} key={beer.id} />;
      }) // otherwise, if there are no matching beers but someone as typed into the input box... show the feedback panel
    ) : matchingBeers.length === 0 && inputLength > 0 ? (
      <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
    ) : (
      // else if matching beers is more than 0 and inputLength has a length
      beers.map((beer) => {
        console.log("beers get mapped as matchingBeers.length is 0 and input length is 0")
        return <Beer beer={beer} key={beer.id} />;
      })
    );

  // FOR TOMORROW - search 'helloooooo' then click on 'classic' beers radio button - see why it is breaking. 'mappedBeers.filter is not a function' error
console.log("mappedBeers is ", mappedBeers)
console.log("mappedBeers.length is ", mappedBeers.length)

  const getBeersJSX = () => {
    if (radioValue === "all") {
      // console.log(
      //   "radio value is 'all' and matchingBeers.length is less than or equal to zero"
      // ); // if matching beers has no length. !matchingBeers /// got rid of && beers.length
      return mappedBeers;
    } else if (radioValue === "abv" && mappedBeers.length) { // got rid of && beers.length
      // got rid of && beers.length
      const highAbvBeers = mappedBeers.filter((beer) => {
        console.log("we're in the abv section of getBeersJSX")
        return beer.props.beer.abv > 6;
      });
      return highAbvBeers.length <= 0 ? (
        <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
      ) : (
        highAbvBeers
      );
    } else if (radioValue === "classic" && mappedBeers.length) { // got rid of && beers.length
      // got rid of && beers.length
      const classicBeers = mappedBeers.filter((beer) => {
        return beer.props.beer.first_brewed.slice(3) < 2010;
      });
      return classicBeers.length <= 0 ? (
        <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
      ) : (
        classicBeers
      );
    } else if (radioValue === "acidic" && mappedBeers.length) { // got rid of && beers.length
      const acidicBeers = mappedBeers.filter((beer) => {
        return beer.props.beer.ph < 4;
      });
      return acidicBeers.length <= 0 ? (
        <FeedbackPanel text="We're sorry but there aren't any beers matching that criteria. " />
      ) : (
        acidicBeers
      );
    } else {
      console.log("we are in the else clause");
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
