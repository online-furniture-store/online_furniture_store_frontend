import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

function Modal({ open, onClose, children }) {
	const modal = open && document.createElement('div');

	const closeByEsc = (e) => {
		if (e.key === 'Escape') onClose();
	};

	useEffect(() => {
		document.addEventListener('keydown', closeByEsc);
		if (open) {
			modal.id = 'modal';
			document.body.appendChild(modal);
		}
		return () => {
			document.removeEventListener('keydown', closeByEsc);
			if (modal) document.body.removeChild(modal);
		};
	});

	return (
		open &&
		ReactDOM.createPortal(
			<ModalOverlay onClose={onClose}>
				<div className={styles.container}>
					{children}
					<div type="button" onClick={onClose} className={styles.crossBtn} />
				</div>
			</ModalOverlay>,
			modal,
		)
	);
}

ModalOverlay.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
	children: PropTypes.element,
};

export default Modal;
