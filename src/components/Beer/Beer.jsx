import React from 'react'
import styles from './Beer.module.scss'

const Beer = (props) => {
  const { beer } = props;

  return (
<div>
          <img src={beer.image_url} alt="picture of beer" />
          <h1>{beer.name}</h1>
          <h2>Here is all the most important info about the beer</h2>
        </div>
  )
}

export default Beer
