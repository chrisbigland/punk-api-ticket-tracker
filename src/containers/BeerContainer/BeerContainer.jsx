import React from 'react'
import styles from './BeerContainer.module.scss'

import Beer from '../../components/Beer/Beer'




const BeerContainer = (props) => {

  const { beers, radioValue } = props;

  radioValue === "abv" ? console.log("beercontainer it's abv!") : radioValue === "classic" ? console.log("beercontainer it's classic!") : radioValue === "acidic" ? console.log("beercontainer it's acidic!") : console.log("nada");

  const mappedBeers = beers.map((beer) => {
    return <Beer beer={beer} key={beer.id}/>
  })

// aim is to eventually just display beers jsx in the return. It will be set in the below ternary according to which radio button is selected. the beers will then be filtered accordingly. 

// const beersJSX = radioValue === "abv" ? mappedBeers.filter((beer) => {
//   return beer.props.beer.abv > 6
// }) : "no beers found";
// console.log("beersJSX is currently set to ", beersJSX)

  const beersJSX = radioValue === "abv" ? mappedBeers.filter((beer) => {
    return beer.props.beer.abv > 6
  }) : radioValue === "classic" ? mappedBeers.filter((beer) => {
    return beer.props.beer.first_brewed.slice(3) < 2010
  }) : radioValue === "acidic" ? mappedBeers.filter((beer) => {
    return beer.props.beer.ph < 4 
  }) : "no beers found";
  console.log("beersJSX is currently set to ", beersJSX)

  // onclick run function updateBeerJSX which sets the JSX according to the radio selection


  // const beerJSX = aBV.checked ? mappedBeers.filter((beer) => { return beer.props.beer.abv > 6 } ) : mappedBeers;
  // console.log(beerJSX)

  //1. user clicks on radio button 2. triggers function in App 'updateBeerJSX' - want this to check which button is checked and then perform relevant filter according to this. E.g. if aBV.checked filter beer.props.beer.abv. 3. This then needs to be set to a variable 'filteredBeers' and passed back down as a prop to put into the return. 


  //TAKE HOMES - 1. filter needs to be in APP. 2. for this, the mapped beers need to be in APP too, this can be done by setting them to state. 


  return (
    <>
    <div className={styles.beers}>
      {/* {mappedBeers.filter((beer) => {
        return beer.props.beer.abv > 6
      })} */}
      {beersJSX}
      {/* {mappedBeers.filter(())} */}
      {/* {beerJSX} */}
    </div>

    </>
  )
}

export default BeerContainer
