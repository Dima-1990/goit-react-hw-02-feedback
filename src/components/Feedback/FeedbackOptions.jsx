import React from 'react';
import {  Btn } from '../Feedback/Feedback.css';

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

export default FeedbackOptions;
