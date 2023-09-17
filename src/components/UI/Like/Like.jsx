import PropTypes from 'prop-types';
import styles from './Like.module.css';

function Like({ onClick, active, ariaLabel }) {
	return (
		<button
			className={active ? `${styles.like} ${styles.active}` : styles.like}
			onClick={(e) => {
				e.stopPropagation();
				onClick();
			}}
			type="button"
			aria-label={ariaLabel}
		/>
	);
}

Like.propTypes = {
	active: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	ariaLabel: PropTypes.string.isRequired,
};

export default Like;
