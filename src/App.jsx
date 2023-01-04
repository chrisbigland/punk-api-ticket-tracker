import styles from "./App.module.scss";
import { useState, useEffect } from "react";
// state to be search value and checkbox value

import Main from "./containers/Main";
import SideNav from "./containers/SideNav";



const App = () => {
  const [beers, setBeers] = useState([]);
  // const [updatedBeersArr, setUpdatedBeersArr] = useState([]); // this will contain "isShowing" property
  // const [highestABV, setHighestABV] = useState("");
  // have a state here that stores the search text
  // const baseAPI = aBV.checked ? "https://api.punkapi.com/v2/beers?page=1&per_page=80" : classic.checked ? "https://api.punkapi.com/v2/beers?page=1&per_page=80" : acidic.checked ? "https://api.punkapi.com/v2/beers?page=1&per_page=80" : "https://api.punkapi.com/v2/beers?page=1&per_page=80";
  const [pageContent, setPageContent] = useState("https://api.punkapi.com/v2/beers?page=1&per_page=80");



  const updateDisplayedBeers = (searchTerm) => {
    console.log("searchTerm is ", searchTerm)
    const newPageContent = searchTerm ? "https://api.punkapi.com/v2/beers?beer_name=" + searchTerm : "https://api.punkapi.com/v2/beers?page=1&per_page=80";
    setPageContent(newPageContent);
    console.log("pageContent state is ", pageContent)
  }

  const getBeers = () => {    // fetches beers from API (make it according to searchTerm)
    // fetch("https://api.punkapi.com/v2/beers")
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

  return (
    <>
      <main className={styles.content}>
        <section className={styles.sideNav}>
          <SideNav updateSearchText={updateDisplayedBeers}/>
        </section>

        <section className={styles.main}>
          <Main beers={beers} />
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
// include shorten description function as in mealworm CardBack.jsx