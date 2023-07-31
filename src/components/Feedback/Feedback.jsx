import React, { Component } from 'react';
import { FitSection} from '../Feedback/Feedback.css';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification'; 

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = (good / total) * 100;
    return positiveFeedback;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <FitSection>
        <h2>Please leave a feedback</h2>

        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleBtnClick}
        />

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
         
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback.toFixed(0)}
            />
         
        )}
      </FitSection>
    );
  }
}
