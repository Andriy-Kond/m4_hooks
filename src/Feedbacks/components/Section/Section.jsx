import css from './Section.module.css';

import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <p className={css.title}>{title}</p>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
