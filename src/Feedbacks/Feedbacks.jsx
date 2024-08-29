// todo: Рефакторінг затримок за допомогою useMemo
import { Component } from "react";

import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = currentBtnName => {
    this.setState(prevState => {
      return { [currentBtnName]: prevState[currentBtnName] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = total => {
    return total && Math.round((100 / total) * this.state.good);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}></FeedbackOptions>
        </Section>
        {good || neutral || bad ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={
                this.countPositiveFeedbackPercentage
              }></Statistics>
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </div>
    );
  }
}
