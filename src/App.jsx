import styles from "./App.module.scss";
import { useState, useEffect } from "react";

import Main from "./containers/Main";
import SideNav from "./containers/SideNav";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [pageContent, setPageContent] = useState(
    "https://api.punkapi.com/v2/beers?page=1&per_page=80"
  );
  const [radioValue, setRadioValue] = useState("");


  const updateDisplayedBeers = (searchTerm) => {
    // uses the search text to display relevant beers on the screen
    console.log("searchTerm is ", searchTerm);
    const newPageContent = searchTerm
      ? "https://api.punkapi.com/v2/beers?beer_name=" + searchTerm
      : "https://api.punkapi.com/v2/beers?page=1&per_page=80";
    setPageContent(newPageContent);
  };

  const getBeers = () => {
    // fetches beers from API and sets them to state 'beers'
    fetch(pageContent)
      .then((response) => response.json())
      .then((jsonResponse) => setBeers(jsonResponse));
  };

  useEffect(() => {
    // calls getBeers() only once the pageContent (state containing relevant fetch URL) has been set.
    getBeers();
    console.log(beers);
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

        <section className={styles.main}>
          <Main beers={beers} radioValue={radioValue} />
        </section>
      </main>
    </>
  );
};

export default App;

// TASK LIST
// if no image - put in a placeholder image.
// get multiple (more than 80) showing on page.
// write tests
// sort out feedback panel
// write readme
