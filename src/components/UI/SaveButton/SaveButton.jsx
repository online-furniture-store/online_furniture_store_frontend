import PropTypes from 'prop-types';
import styles from './SaveButton.module.css';

function SaveButton({ onClick, buttonText, type, black }) {
	return (
		// eslint-disable-next-line react/button-has-type
		<button
			className={
				black
					? `${styles.button} ${styles.button__black}`
					: `${styles.button} ${styles.button__white}`
			}
			// eslint-disable-next-line react/button-has-type
			type={type}
			onClick={onClick}
		>
			<span>{buttonText}</span>
		</button>
	);
}

SaveButton.propTypes = {
	onClick: PropTypes.func,
	buttonText: PropTypes.string.isRequired,
	type: PropTypes.string,
  black: PropTypes.bool,
};

export default SaveButton;
