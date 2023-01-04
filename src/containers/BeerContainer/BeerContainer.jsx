import React from 'react'
import styles from './BeerContainer.module.scss'

import Beer from '../../components/Beer/Beer'


const aBV = document.querySelector("#abv")
const classic = document.querySelector("#classic")
const acidic = document.querySelector("#acidic")

const BeerContainer = (props) => {

  const { beers } = props;

// ternary here? default as the below map, otherwise filter according to radio selection 

  // const beerJSX = aBV.checked ? beers.filter((beer) => {return <Beer beer={beer} key={beer.id}/>
  // })

  // const mapAndFilter = () => {
  //   beer.
  // } 

  //MAP IT HERE AND FILTER IT BELOW TO SHOW

  const mappedBeers = beers.map((beer) => {
    return <Beer beer={beer} key={beer.id}/>
  })

  return (
    <>
    <div className={styles.beers}>
      {mappedBeers.filter((beer) => {
        return beer.props.beer.abv > 6
      })}
      {/* {mappedBeers.filter(())} */}
    </div>

    </>
  )
}

export default BeerContainer
