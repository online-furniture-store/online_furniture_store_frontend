import styles from './SelectOrderStatus.module.css';

function SelectOrderStatus() {
	return (
		<select className={styles.selectList}>
			<option className={styles.item} value="">
				Все
			</option>
			<option className={styles.item} value="">
				Доставляется
			</option>
			<option className={styles.item} value="">
				Оформлен
			</option>
			<option className={styles.item} value="">
				Получен
			</option>
		</select>
	);
}

export default SelectOrderStatus;
