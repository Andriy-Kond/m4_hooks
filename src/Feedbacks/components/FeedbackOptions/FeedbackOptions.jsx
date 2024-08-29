import css from "./FeedbackOptions.module.css";

import PropTypes from "prop-types";

export const FeedbackOptions = ({ btnNames, handleClick }) => {
  return btnNames.map(btnName => {
    return (
      <button
        key={btnName}
        className={css.button}
        name={btnName}
        onClick={() => handleClick(btnName)}>
        {btnName}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  btnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
