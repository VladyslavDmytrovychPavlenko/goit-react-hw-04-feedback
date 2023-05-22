import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOp, Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const handleButtonClick = name => {
    onLeaveFeedback(name);
  };

  return (
    <FeedbackOp>
      {options.map(item => (
        <Button key={item} name={item} onClick={() => handleButtonClick(item)}>
          {item}
        </Button>
      ))}
    </FeedbackOp>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
