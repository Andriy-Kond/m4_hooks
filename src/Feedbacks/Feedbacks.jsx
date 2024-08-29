// todo: Рефакторінг затримок за допомогою useMemo

import { useState } from "react";
import { Section } from "./components/Section/Section";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistics/Statistics";
import { Notification } from "./components/Notification/Notification";

function Feedbacks() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = currentBtnName => {
    console.log("onLeaveFeedback >> currentBtnName:::", currentBtnName);
    switch (currentBtnName) {
      case "good":
        return setGood(s => s + 1);
      case "neutral":
        return setNeutral(s => s + 1);
      case "bad":
        return setBad(s => s + 1);

      default:
        throw new Error(`Option ${currentBtnName} is not defined`);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = total =>
    total && Math.round((100 / total) * good);

  const btnNames = { good, neutral, bad };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          btnNames={Object.keys(btnNames)}
          handleClick={onLeaveFeedback}></FeedbackOptions>
      </Section>
      {good || neutral || bad ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}></Statistics>
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
}

export default Feedbacks;
