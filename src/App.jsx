import styles from "./App.module.scss";
import { useState, useEffect } from "react";

import Main from "./containers/Main";
import SideNav from "./containers/SideNav";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [pageContent, setPageContent] = useState(
    "https://api.punkapi.com/v2/beers?page=4&per_page=80"
  );
  const [radioValue, setRadioValue] = useState("all");
  const [ apiBeersArr, setApiBeersArr ] = useState([]);

  const updateDisplayedBeers = (searchTerm) => {
    // uses the search text to display relevant beers on the screen
    console.log("searchTerm is ", searchTerm);
    const newPageContent = searchTerm
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
    console.log("");
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

  const getBeers = () => {
    let beerArr = [];
    for (let index = 1; index < 6; index++) {
      // fetches beers from API and sets them to state 'beers'
      fetch(`https://api.punkapi.com/v2/beers?page=${index}&per_page=80`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          beerArr.push(jsonResponse)
          // console.log(jsonResponse)
          // setApiBeersArr(
          //   apiBeersArr.length < 5
          //     ? apiBeersArr.push(jsonResponse)
          //     : apiBeersArr
          // );
        });
    }

    // try setting one to state. Issue here appears to be that array is showing as empty in console however when we click into it, it has 5 items. 
    console.log(beerArr.length)
    const newBeerArr = beerArr
    console.log(newBeerArr)
    // setApiBeersArr(newBeerArr)
    // const joinedBeerArr = [...beerArr[0], ...beerArr[1], ...beerArr[2], ...beerArr[3], ...beerArr[4]]
    // setApiBeersArr(joinedBeerArr)
  };

  //a function to combine an array of 5 arrays. 
  const combineData = (data) => {
    console.log("apiBeersArr is now called 'data', is in combineData function and the value is ", data);
    console.log(data[0].concat(data[1], data[2], data[3], data[4]))
  }



  useEffect(() => {
    // calls getBeers() only once the pageContent (state containing relevant fetch URL) has been set.
    getBeers();
    // console.log(beers);
    // combineData(apiBeersArr)
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
