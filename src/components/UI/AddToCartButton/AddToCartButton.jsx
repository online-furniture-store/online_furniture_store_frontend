import PropTypes from 'prop-types';
import styles from './AddToCartButton.module.css';
import checkMark from '../../../assets/img/check-mark.png';

function AddToCartButton({ onClick, isSuccess }) {
	return (
		<button
			className={isSuccess ? `${styles.button} ${styles.button_type_added}` : styles.button}
			type="button"
			onClick={onClick}
		>
			{isSuccess && <img className={styles.img} src={checkMark} alt="Галочка" />}
			<span>{isSuccess ? 'Товар в корзине' : 'Добавить в корзину'}</span>
		</button>
	);
}

AddToCartButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	isSuccess: PropTypes.bool,
};

export default AddToCartButton;
