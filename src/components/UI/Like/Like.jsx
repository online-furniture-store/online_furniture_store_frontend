import PropTypes from 'prop-types';
import LikeStyles from './Like.module.css';

function Like({ onClick, active }) {
	return (
		<button
			className={active ? `${LikeStyles.like} ${LikeStyles.active}` : LikeStyles.like}
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
