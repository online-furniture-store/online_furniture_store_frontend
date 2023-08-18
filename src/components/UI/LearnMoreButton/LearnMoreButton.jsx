import PropTypes from 'prop-types';
import styles from './LearnMoreButton.module.css';

function LearnMoreButton({ onClick, buttonText }) {
	return (
		<button className={styles.button} type="button" onClick={onClick}>
			<span>{buttonText}</span>
		</button>
	);
}

LearnMoreButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	buttonText: PropTypes.string.isRequired,
};

export default LearnMoreButton;
