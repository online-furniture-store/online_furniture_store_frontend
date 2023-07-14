import PropTypes from 'prop-types';
import styles from './TextField.module.css';

function TextField({ onChange, value, label }) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="textarea-id">{label}</label>
      <textarea
        className={styles.textarea}
        id="textarea-id"
        value={value || ''}
        onChange={onChange}
      />
    </div>
  );
}

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
};

export default TextField;
