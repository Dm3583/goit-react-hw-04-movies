import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ type, children, onClick }) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  children: 'Button',
  onClick: null,
  type: 'submit',
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default Button;
