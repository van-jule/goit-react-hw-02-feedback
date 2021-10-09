import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'
import Statistics from './components/Statistics'
import FeedbackOptions from './components/FeedbackOptions'
import Section from './components/Section'
import Notification from './components/Notification'
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }

  onLeaveFeedback = e => {
    const value = e.target.value
    console.log(e.target)

    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      }
    })
  }

  render() {
    let countTotalFeedback = 0
    const feedbackArr = Object.values(this.state)
    for (const feedback of feedbackArr) {
      countTotalFeedback += feedback
    }

    let countPositiveFeedbackPercentage = 0
    countPositiveFeedbackPercentage = countTotalFeedback ? Math.round((this.state.good / countTotalFeedback) * 100) : 0

    const options = Object.keys(this.state)

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    )
  }
}

export default App
