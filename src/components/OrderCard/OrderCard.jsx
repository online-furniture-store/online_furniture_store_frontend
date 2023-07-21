import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import productImage from '../../assets/img/kandinsky.png';
import styles from './OrderCard.module.css';

function OrderCard({
	date,
	orderId,
	totalCost,
	deliveryDate,
	productsInOrder,
}) {
	const { allProducts } = useSelector((state) => state.products);

	const productCard = useCallback(() => {
		const productImages = allProducts.filter((item) => {
			return productsInOrder.some((f) => {
				return f.id === item.id;
			});
		});

		return productImages;
	}, [allProducts, productsInOrder]);

	return (
		<li className={styles.item}>
			<div className={styles.container}>
				<div className={styles.orderInfoContainer}>
					<div className={styles.orderInfo}>
						<h2 className={styles.title}>{`Заказ от ${date}`}</h2>
						<p className={styles.status}>Оформлен</p>
					</div>
					<p className={styles.totalPrice}>{`${totalCost} ₽`}</p>
				</div>
				<p className={styles.orderId}>{orderId}</p>
				<div className={styles.orderDetailsContainer}>
					<div className={styles.orderDetailsWrapper}>
						<h3 className={styles.deliveryType}>Доставка в пункт выдачи</h3>
						<p className={styles.deliveryDate}>
							{`Дата доставки ${deliveryDate}`}
						</p>
					</div>
					<ul className={styles.productList}>
						{productCard().map((imageCard) => {
							return (
								<li key={imageCard.id}>
									<img
										className={styles.product}
										src={
											imageCard.images
												? imageCard.images.first_image
												: productImage
										}
										alt="иконка продукта"
									/>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={styles.buttonWrapper}>
					<Link to="!#" className={styles.link}>
						Подробнее
					</Link>
					<Link to="!#" className={styles.link}>
						<span className={styles.icon} />
						Повторить заказ
					</Link>
				</div>
			</div>
		</li>
	);
}

OrderCard.propTypes = {
	date: PropTypes.string,
	orderId: PropTypes.number,
	totalCost: PropTypes.number,
	deliveryDate: PropTypes.string,
	productsInOrder: PropTypes.arrayOf(
		PropTypes.shape({
			cost: PropTypes.number,
			id: PropTypes.number,
			name: PropTypes.string,
			price: PropTypes.number,
			quantity: PropTypes.number,
		}),
	),
};

export default OrderCard;
