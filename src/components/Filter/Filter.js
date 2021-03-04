import React from 'react';
import styles from './Filter.module.scss';
import PropTypes from 'prop-types';

const Filter = ({ list, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {list.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <span>{name}</span>
          <span>{number}</span>

          <button
            type="button"
            onClick={() => deleteContact(id)}
            className={styles.button}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

Filter.propTypes = {
  list: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default Filter;
