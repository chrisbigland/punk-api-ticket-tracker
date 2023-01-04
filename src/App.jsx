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
  const [searchText, setSearchText] = useState("");

  //write the updateDisplayedBeers function here. Pass it down as props down to SearchBar via SideNav. Make it accept a 'search Term'

  const updateDisplayedBeers = (searchTerm) => {
    console.log("searchTerm is ", searchTerm)
    setSearchText(searchTerm);
    console.log("searchText state is ", searchText)
  }
// ${searchText}

  const getBeers = (searchTerm) => {    // fetches beers from API (make it according to searchTerm)
    console.log("searchTerm is", searchTerm)
    fetch("https://api.punkapi.com/v2/beers")
    // fetch(`https://api.punkapi.com/v2/beers?beer_name=Amarillo`) 
      .then((response) => response.json())
      .then((jsonResponse) => setBeers(jsonResponse));
      console.log("beers are ", beers)
  };

  useEffect(() => {
    getBeers();
    console.log(beers);
  }, []);

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
