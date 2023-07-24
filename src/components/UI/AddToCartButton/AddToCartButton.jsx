import PropTypes from 'prop-types';
import styles from './AddToCartButton.module.css';
import checkMark from '../../../assets/img/check-mark.svg';

function AddToCartButton({ onClick, isSuccess, text }) {
	return (
		<button
			className={
				isSuccess
					? `${styles.button} ${styles.button_type_added}`
					: styles.button
			}
			type="button"
			onClick={(e) => {
				e.stopPropagation();
				onClick();
			}}
		>
			{isSuccess && (
				<img className={styles.img} src={checkMark} alt="Галочка" />
			)}
			<span>{isSuccess ? 'Товар\u00A0в\u00A0корзине' : text}</span>
		</button>
	);
}

AddToCartButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	isSuccess: PropTypes.bool,
	text: PropTypes.string.isRequired,
};

export default AddToCartButton;
