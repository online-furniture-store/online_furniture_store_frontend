import PropTypes from 'prop-types';
import styles from './RadioCircleButton.module.css';

function RadioCircleButton({ text, name, value, onChange, checked }) {
  return (
    <label className={styles.container}>
      <input type="radio" className={styles.realRadio} checked={checked} onChange={onChange} name={name} value={value} />
      <span className={styles.customRadio} />
      <p className={styles.text}>{text}</p>
    </label>
  );
}

RadioCircleButton.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};
export default RadioCircleButton;
