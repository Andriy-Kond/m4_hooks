import css from './Statistics.module.css';

import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const totalFeedbacks = total();

  return (
    <div className={css.statistics}>
      <span>Good: {good} </span>
      <span>Neutral: {neutral} </span>
      <span>Bad: {bad}</span>
      <span>Total: {totalFeedbacks}</span>
      <span>Positive feedbacks: {positivePercentage(totalFeedbacks)}%</span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
