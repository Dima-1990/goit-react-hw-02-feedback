import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from '../Feedback/Feedback.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Btn type="button" key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Btn>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
