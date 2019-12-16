import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Filter.module.css';

export default function Filter({ htmlFor, onChange, value }) {
  return (
    <>
      <form className={Styles.form__filter}>
        <label htmlFor={htmlFor} className={Styles['form__name-title']}>
          Fined contacts by name
          <input
            className={Styles['form__name-input']}
            onChange={onChange}
            value={value}
            name="filter"
            type="text"
            placeholder="Input fined contacts"
          />
        </label>
      </form>
    </>
  );
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};
