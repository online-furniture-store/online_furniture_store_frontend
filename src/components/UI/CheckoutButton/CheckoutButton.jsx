import PropTypes from 'prop-types';
import styles from './CheckoutButton.module.css';

function CheckoutButton({ onClick }) {
	return (
		<button
			className={styles.button}
			type="button"
			onClick={onClick}
		>
			<span>Оформить заказ</span>
		</button>
	);
}

CheckoutButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default CheckoutButton;
