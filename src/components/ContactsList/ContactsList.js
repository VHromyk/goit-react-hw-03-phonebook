import React from 'react';
import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';

const ContactList = ({ value, changeFilter }) => (
  <label className={styles.label}>
    Find contacts by name:
    <input
      type="text"
      value={value}
      onChange={changeFilter}
      className={styles.input}
    ></input>
  </label>
);

ContactList.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func,
};

export default ContactList;
