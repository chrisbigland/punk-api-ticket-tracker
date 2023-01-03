import React from 'react'
import styles from './BeerContainer.module.scss'

import Beer from '../../components/Beer/Beer'

const BeerContainer = (props) => {

  const { beers } = props;


  return (
    <>
    <div>
      {beers.map((beer) => {
        return   <Beer beer={beer}/>
      })}
    </div>

    </>
  )
}

export default BeerContainer
