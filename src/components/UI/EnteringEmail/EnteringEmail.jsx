import PropTypes from 'prop-types';
import styles from './EnteringEmail.module.css';

function EnteringEmail({ onChange, value, placeholder }) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        id="email"
        type="email"
        autoComplete="email"
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className={styles.item} />
    </div>
  );
}

EnteringEmail.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default EnteringEmail;
