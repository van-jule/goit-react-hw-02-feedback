import React from 'react'
import styles from '../FeedbackOptions/FeedbackOptions.module.css'
import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="wrap">
    {options.map(option => (
      <button className={styles.button} type="button" key={option} value={option} onClick={onLeaveFeedback}>
        {option}
      </button>
    ))}
  </div>
)

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions
