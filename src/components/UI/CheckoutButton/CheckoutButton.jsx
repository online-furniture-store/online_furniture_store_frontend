import styles from './CheckoutButton.module.css';

function CheckoutButton() {
	return (
		<button
			className={styles.button}
			type="button"
		>
			<span>Оформить заказ</span>
		</button>
	);
}

export default CheckoutButton;
