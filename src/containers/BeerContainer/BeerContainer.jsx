import React, { useEffect } from 'react'
import styles from './BeerContainer.module.scss'

import Beer from '../../components/Beer/Beer'
import FeedbackPanel from '../../components/FeedbackPanel/FeedbackPanel';


const BeerContainer = (props) => {

  const { beers, radioValue } = props;

  const mappedBeers = beers.map((beer) => {
    return <Beer beer={beer} key={beer.id}/>
  })

  // const getBeersJSX = () => {
  //   if (radioValue === "all" && beers.length) {
  //     return mappedBeers;
  // }
  //   else if (radioValue === "abv" && beers.length) {
  //    const highAbvBeers = mappedBeers.filter((beer) => {
  //       return beer.props.beer.abv > 6})
  //     return highAbvBeers;
  //   }
  //   else if (radioValue === "classic" && beers.length) {
  //     const classicBeers = mappedBeers.filter((beer) => {
  //       return beer.props.beer.first_brewed.slice(3) < 2010
  //     })
  //     return classicBeers;
  //   }
  //   else if (radioValue === "acidic" && beers.length) {
  //     const acidicBeers = mappedBeers.filter((beer) => {
  //       return beer.props.beer.ph < 4 
  //     })
  //     return acidicBeers;
  //   } else {
  //     return <FeedbackPanel />
  //   }
  // }

  // useEffect(() => {
  //  getBeersJSX()
  // }, [beers])


  const beersJSX = radioValue === "all" && beers.length ? mappedBeers : radioValue === "abv" && beers.length ? mappedBeers.filter((beer) => {
    return beer.props.beer.abv > 6
  }) : radioValue === "classic" && beers.length ? mappedBeers.filter((beer) => {
    return beer.props.beer.first_brewed.slice(3) < 2010
  }) : radioValue === "acidic" && beers.length ? mappedBeers.filter((beer) => {
    return beer.props.beer.ph < 4 
  }) : <FeedbackPanel /> ; 

  console.log("beersJSX is ", beersJSX)


  return (
    <>
    <div className={styles.beers}>
      {beersJSX}
    </div>
    </>
  )
}

export default BeerContainer
