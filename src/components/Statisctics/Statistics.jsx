import React, { Component } from 'react';
import styled from '@emotion/styled';

import PropTypes from 'prop-types';

class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const feedback = Math.floor(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return feedback ? feedback : 0;
  }

  render() {
    return (
      <main>
        <div>
          <h2>Please leave feedback</h2>
          <ul>
            <li>
              <button name="good" type="button" onClick={this.handleIncrement}>
                Good
              </button>
            </li>
            <li>
              <button
                name="neutral"
                type="button"
                onClick={this.handleIncrement}
              >
                Neutral
              </button>
            </li>
            <li>
              <button name="bad" type="button" onClick={this.handleIncrement}>
                Bad
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>
              Good: <span>{this.state.good}</span>
            </li>
            <li>
              Neutral: <span>{this.state.neutral}</span>
            </li>
            <li>
              Bad: <span>{this.state.bad}</span>
            </li>
            <li>
              Total: <span>{this.countTotalFeedback()}</span>
            </li>
            <li>
              Positive feedback:{' '}
              <span>{this.countPositiveFeedbackPercentage()}%</span>
            </li>
          </ul>
        </div>
      </main>
    );
  }
}

export default Statistics;
