import styles from "./App.module.scss";
import { useState, useEffect } from "react";

import Main from "./containers/Main";
import SideNav from "./containers/SideNav";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [matchingBeers, setMatchingBeers] = useState([]);
  const [inputLength, setInputLength] = useState(0);
  const [radioValue, setRadioValue] = useState("all");

  const updateDisplayedBeers = (searchTerm) => {
    setInputLength(searchTerm.length);

    const matchingBeers = beers.filter((beer) => {
      const beerName = beer.name.toLowerCase();
      return beerName.includes(searchTerm.toLowerCase());
    });
    setMatchingBeers(matchingBeers);
  };

  const cleanBeers = (beers) => {
    const cleanedBeers = beers.map((beer) => {
      if (beer.image_url === null) {
        beer.image_url = require("./images/brewdog.png");
      }
      if (beer.ph === null) {
        beer.ph = " N/A";
      }
      return beer;
    });
    return cleanedBeers;
  };

  const getBeers = async () => {
    let beerArr = [];
    for (let index = 1; index < 6; index++) {
      await fetch(`https://api.punkapi.com/v2/beers?page=${index}&per_page=80`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          beerArr.push(...jsonResponse);
        });
    }
    setBeers(cleanBeers(beerArr));
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <>
      <main className={styles.content}>
        <section className={styles.sideNav}>
          <SideNav
            updateSearchText={updateDisplayedBeers}
            setRadioValue={setRadioValue}
          />
        </section>

        <section className={styles.main}>
          <Main
            beers={beers}
            radioValue={radioValue}
            matchingBeers={matchingBeers}
            inputLength={inputLength}
          />
        </section>
      </main>
    </>
  );
};

export default App;

// TASK LIST
// write tests
// How to deal with text appearing before beers load- if this fetch hasn't completed then display a 'loading' spinner element (state to add in)
