import React from 'react';
import PropTypes from 'prop-types';
import {FitSection} from '../Feedback/Feedback.css'

const Section = ({ title, children }) => {
  return (
    <FitSection>
      <h2>{title}</h2>
      {children}
    </FitSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
