import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, selectOrders } from '../../store/orders/orders-slice';
import OrderCard from '../OrderCard/OrderCard';
import SelectOrderStatus from '../UI/SelectOrderStatus/SelectOrderStatus';
import Title from '../UI/Title/Title';
import styles from './UserOrders.module.css';

export function UserOrders() {
	const dispatch = useDispatch();
	const { orders, loading } = useSelector(selectOrders);

	useEffect(() => {
		dispatch(getOrders());
	}, [dispatch]);

	return (
		<div className={styles.container}>
			<Title titleText="Заказы" />
			<SelectOrderStatus />
			<ul className={styles.list}>
				{!loading &&
					orders.map((order) => (
						<OrderCard
							key={order.id}
							date={order.delivery.datetime_to}
							orderId={order.id}
							totalCost={order.total_cost}
							deliveryDate={order.delivery.datetime_to}
							productsInOrder={order.products}
						/>
					))}
			</ul>
		</div>
	);
}
