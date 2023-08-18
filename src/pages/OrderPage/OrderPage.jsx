import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './OrderPage.module.css';
import Order from '../../components/Sections/Order/Order';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import { fetchOrder, selectOrders } from '../../store/orders/orders-slice';
import { selectProducts } from '../../store/products/products-slice';

function OrderPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { allProducts } = useSelector(selectProducts);
	const { order, loading } = useSelector(selectOrders);

	useEffect(() => {
		dispatch(fetchOrder(id));
	}, [dispatch, id]);

	const productsWeight =
		order.products &&
		allProducts.filter((item) => {
			return order.products.some((f) => {
				return f.id === item.id;
			});
		});
	const weight = order.products && productsWeight.map((el) => el.weight)[0];

	return loading ? null : (
		<div className={styles.container}>
			<Order />
			<TotalPrice
				totalPrice={order.total_cost}
				count={order.products && order.products.length}
				weight={order.products && weight}
			/>
		</div>
	);
}

export default OrderPage;
