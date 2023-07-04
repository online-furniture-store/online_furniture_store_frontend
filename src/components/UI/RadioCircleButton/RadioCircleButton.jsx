import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './RadioCircleButton.module.css';

function RadioCircleButton({ text, name }) {
  const [checked, setChecked] = useState(true);

  function chengeCheckbox() {
    setChecked(!checked);
  }

  return (
    <label className={styles.container}>
      <input type="radio" className={styles.realRadio} checked={checked} onChange={chengeCheckbox} name={name} />
      <span className={styles.customRadio} />
      <p className={styles.text}>{text}</p>
    </label>
  );
}

RadioCircleButton.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default RadioCircleButton;
