import PropTypes from 'prop-types';
import styles from './Like.module.css';

function Like({ onClick, active }) {
	return (
		<button
			className={active ? `${styles.like} ${styles.active}` : styles.like}
			onClick={onClick}
			type="button"
		/>
	);
}

Like.propTypes = {
	active: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default Like;
