import { useState } from 'react';
import styles from './AddToCartButton.module.css';
import checkMark from '../../../assets/img/check-mark.png';

function AddToCartButton() {
	const [isAdded, setIsAdded] = useState(false);
	return (
		<button
			className={isAdded ? `${styles.button} ${styles.button_type_added}` : styles.button}
			type="button"
			onClick={() => {
				setIsAdded(true);
			}}
		>
			{isAdded && <img className={styles.img} src={checkMark} alt="Галочка" />}
			<span>{isAdded ? 'Товар в корзине' : 'Добавить в корзину'}</span>
		</button>
	);
}

export default AddToCartButton;
