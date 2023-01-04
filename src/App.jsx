import styles from "./App.module.scss";
import { useState, useEffect } from "react";
// state to be search value and checkbox value

import Main from "./containers/Main";
import SideNav from "./containers/SideNav";



const App = () => {
  const [beers, setBeers] = useState([]);

  const [pageContent, setPageContent] = useState("https://api.punkapi.com/v2/beers?page=1&per_page=80");

  const [radioValue, setRadioValue] = useState("");


  const updateDisplayedBeers = (searchTerm) => {
    console.log("searchTerm is ", searchTerm)
    const newPageContent = searchTerm ? "https://api.punkapi.com/v2/beers?beer_name=" + searchTerm : "https://api.punkapi.com/v2/beers?page=1&per_page=80";
    setPageContent(newPageContent);
    console.log("pageContent state is ", pageContent)
  }

  const getBeers = () => {    // fetches beers from API (make it according to searchTerm)
      fetch(pageContent)
      .then((response) => response.json())
      .then((jsonResponse) => setBeers(jsonResponse));
      console.log("beers are ", beers)
  };

  useEffect(() => {
    getBeers();
    console.log(beers);
  }, [pageContent]);

  // useEffect(() => {
  //   setUpdatedBeersArr(beers.map((beer) => {
  //     return { beer, isShowing: true };
  //   }));
  //   console.log("updatedBeersArr is", updatedBeersArr);
  // }, [beers]);
  useEffect(() => {

  }, [beers]);


const aBV = document.querySelector("#abv")
const classic = document.querySelector("#classic")
const acidic = document.querySelector("#acidic")

const updateBeerJSX = () => {
  if (aBV.checked) {
    console.log("ABV is checked")
    setRadioValue("abv")
  }
  else if (classic.checked) {
    console.log("classic is checked")
    setRadioValue("classic")
  }
  else if (acidic.checked) {
    console.log("acidic is checked")
    setRadioValue("acidic")
  }
}

  return (
    <>
      <main className={styles.content}>
        <section className={styles.sideNav}>
          <SideNav updateSearchText={updateDisplayedBeers} updateBeerJSX={updateBeerJSX}/>
        </section>

        <section className={styles.main}>
          <Main beers={beers} radioValue={radioValue}/>
        </section>
      </main>
    </>
  );
};

export default App;



// TASK LIST
// if no image - put in a placeholder image. 
// radio buttons - use a filter
// get multiple showing on page. 
// change variable names especially updatebeersjsx
// include shorten description function as in mealworm CardBack.jsx
//Add radio button - all beers