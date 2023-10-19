import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

function Feedback() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={handleFeedback}
      />
      {totalFeedback > 0 ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentage={
            feedback.good > 0
              ? Math.round((feedback.good / totalFeedback) * 100)
              : 0
          }
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}
export default Feedback;
