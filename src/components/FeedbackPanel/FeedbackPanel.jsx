import React from 'react'
import styles from './FeedbackPanel.module.scss'

const FeedbackPanel = (props) => {

  const { text } = props;

  return (
    <div>
      {text}
    </div>
  )
}

export default FeedbackPanel
