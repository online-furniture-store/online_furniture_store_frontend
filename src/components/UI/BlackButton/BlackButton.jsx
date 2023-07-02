import PropTypes from 'prop-types';
import styles from './BlackButton.module.css';

function BlackButton({ onClick, buttonText, buttonLarge }) {
  return (
    <button
      className={buttonLarge ? `${styles.button} ${styles.buttonLarge}` : styles.button}
      onClick={onClick}
      type="button"
    >
      <span>
        {buttonText}
      </span>
    </button>
  );
}

BlackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLarge: PropTypes.string,
};

export default BlackButton;
