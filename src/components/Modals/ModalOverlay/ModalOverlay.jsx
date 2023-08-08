import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';

function ModalOverlay({ onClose, children }) {
	const closeByOverlay = (e) => {
		if (
			e.target.localName === 'div' &&
			e.target.className.includes('overlay')
		) {
			onClose();
		}
	};

	return (
		<div className={styles.overlay} onMouseDown={closeByOverlay}>
			{children}
		</div>
	);
}

ModalOverlay.propTypes = {
	onClose: PropTypes.func,
	children: PropTypes.element,
};

export default ModalOverlay;
