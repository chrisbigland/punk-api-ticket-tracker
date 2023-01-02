import styles from './App.module.scss';
import { useState, useEffect } from "react";

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
    <div className={styles.hello}>
      <p>App works...</p>
    </div>
  );
}

export default App;
