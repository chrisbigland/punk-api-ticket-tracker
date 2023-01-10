import styles from "./App.module.scss";
import { useState, useEffect } from "react";

import Main from "./containers/Main";
import SideNav from "./containers/SideNav";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [pageContent, setPageContent] = useState(     // CHANGE STATE NAMES TO BE MORE REFLECTIVE OF WHAT IT'S DOING
    // default state set to page 1 of api
    "https://api.punkapi.com/v2/beers?page=1&per_page=80"
  );
  const [radioValue, setRadioValue] = useState("all");

  const updateDisplayedBeers = (searchTerm) => {
    // uses the search text to display relevant beers on the screen
    console.log("searchTerm is ", searchTerm);
    console.log(beers)
    const matchingBeers = beers.filter((beer) => {
      const beerName = beer.name.toLowerCase();
    return beerName.includes(searchTerm.toLowerCase())
    })

    console.log(matchingBeers) // set it to state?
    setBeers(matchingBeers)

    console.log("beers are ", beers)
    const newPageContent = searchTerm                             // CHANGE LOGIC HERE - get the data from state and use a filter instead. This used to set what was inside of the getBeers api call. 
      ? "https://api.punkapi.com/v2/beers?beer_name=" + searchTerm
      : "https://api.punkapi.com/v2/beers?page=1&per_page=80";
    setPageContent(newPageContent);
  };

  const cleanBeers = (beers) => {
    // adds in a placeholder image to any item with 'null' for an image URL
    const cleanedBeers = beers.map((beer) => {
      if (beer.image_url === null) {
        beer.image_url = require("./images/brewdog.png");
        return beer;
      } else {
        return beer;
      }
    });
    return cleanedBeers;
  };

  // const getBeers = () => {
  //   // fetches beers from API and sets them to state 'beers'
  //   fetch(pageContent)
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       setBeers(cleanBeers(jsonResponse));
  //     });
  // };

  // How to deal with text appearing before beers load- if this fetch hasn't completed then display a 'loading' spinner element (state to add in)

  const getBeers = async () => {
    let beerArr = [];     // if there is a searchterm value then I want to run the pageContent (URL)
    for (let index = 1; index < 6; index++) {
      // fetches beers from API and sets them to state 'beers'
      await fetch(`https://api.punkapi.com/v2/beers?page=${index}&per_page=80`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          beerArr.push(...jsonResponse);

          // console.log(jsonResponse)
          // setApiBeersArr(
          //   apiBeersArr.length < 5
          //     ? apiBeersArr.push(jsonResponse)
          //     : apiBeersArr
          // );
        });
    }
    console.log(beerArr.length);
    setBeers(beerArr);
  };

  useEffect(() => {
    // calls getBeers() only once the pageContent (state containing relevant fetch URL) has been set.
    getBeers();
    // console.log(beers);
  }, [pageContent]);

  return (
    <>
      <main className={styles.content}>
        <section className={styles.sideNav}>
          <SideNav
            updateSearchText={updateDisplayedBeers}
            setRadioValue={setRadioValue}
          />
        </section>
        {/* <img src={require('./images/brewdog.png')} /> */}
        <section className={styles.main}>
          <Main beers={beers} radioValue={radioValue} />
        </section>
      </main>
    </>
  );
};

export default App;

// TASK LIST
// if no image - put in a placeholder image. Do this after I've worked out how to display all beers on page (as first 80 all have images)
// get multiple (more than 80) showing on page. For loop for this - fetch data from page one then two then three
// write tests
// write readme
// styling
