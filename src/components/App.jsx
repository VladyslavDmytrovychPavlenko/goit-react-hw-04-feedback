import React, { useState } from 'react';
import { Sections } from './Sections/Sections';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  const onLeaveFeedback = name => {
    setFeedback(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const options = Object.keys(feedback);
  const total = countTotalFeedback();

  return (
    <>
      <Sections title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Sections>
      <Sections title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Sections>
    </>
  );
};

export default App;
