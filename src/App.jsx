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
      <>
    <main className={styles.content}>
    <section className={styles.sideNav}>
      <SideNav />
    </section>

    <section className={styles.main}>
      <Main beers={beers}/>
      </section>
    </main>
      </>
  );
};

export default App;
