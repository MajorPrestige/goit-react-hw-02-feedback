import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  totalfeedback,
  feedbackPercentage,
}) => {
  return (
    <ul>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
      <li>
        Total: <span>{totalfeedback}</span>
      </li>
      <li>
        Positive feedback: <span>{feedbackPercentage}%</span>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  totalfeedback: 0,
  feedbackPercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalfeedback: PropTypes.number.isRequired,
  feedbackPercentage: PropTypes.number.isRequired,
};
