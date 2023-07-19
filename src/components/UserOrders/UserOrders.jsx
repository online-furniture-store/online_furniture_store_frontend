import OrderCard from '../OrderCard/OrderCard';
import SelectOrderStatus from '../UI/SelectOrderStatus/SelectOrderStatus';
import Title from '../UI/Title/Title';
import styles from './UserOrders.module.css';

export function UserOrders() {
	return (
		<div className={styles.container}>
			<Title titleText="Заказы" />
			<SelectOrderStatus />
			<ul className={styles.list}>
				<OrderCard />
				<OrderCard />
				<OrderCard />
			</ul>
		</div>
	);
}
