import PropTypes from 'prop-types';
import styles from './BlackButton.module.css';

function BlackButton({ onClick, buttonText, buttonLarge, type }) {
  return (
    <button
      className={buttonLarge ? `${styles.button} ${styles.buttonLarge}` : styles.button}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      <span>
        {buttonText}
      </span>
    </button>
  );
}

BlackButton.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  buttonLarge: PropTypes.bool,
  type: PropTypes.string,
};

export default BlackButton;
