import styles from "./App.module.scss";
import { useState, useEffect } from "react";

import FeedbackPanel from "./components/FeedbackPanel";
import Beer from "./components/Beer";
import SearchBar from "./components/SearchBar";

import Main from "./containers/Main";
import BeerContainer from "./containers/BeerContainer";
import SideNav from "./containers/SideNav";

const App = () => {
  const [beers, setBeers] = useState([]);
  // const [highestABV, setHighestABV] = useState("");

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((jsonResponse) => setBeers(jsonResponse));
  };

  useEffect(() => {
    // console.log("I will only run once");
    getBeers();
    console.log(beers);
  }, []);

  return (
    <div>
      <p className={styles.hello}>App works...</p>
      <Main />
      <SideNav />
      <Beer />
      <FeedbackPanel />
      <SearchBar />
      <BeerContainer />
    </div>
  );
};

export default App;
