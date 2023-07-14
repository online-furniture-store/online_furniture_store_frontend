import PropTypes from 'prop-types';
import styles from './Delete.module.css';

function Delete({ onClick, ariaLabel }) {
	return (
		<button
			className={styles.like}
			onClick={onClick}
			type="button"
			aria-label={ariaLabel}
		/>
	);
}

Delete.propTypes = {
	onClick: PropTypes.func.isRequired,
	ariaLabel: PropTypes.string.isRequired,
};

export default Delete;
