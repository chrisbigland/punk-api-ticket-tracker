import styles from "./App.module.scss";
import { useState, useEffect } from "react";
// state to be search value and checkbox value

import Main from "./containers/Main";
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
    <section className={styles.hello}>
      <Main />
      <SideNav />
    </section>
  );
};

export default App;
