import { Link } from 'react-router-dom';
import productImage from '../../assets/img/kandinsky.png';
import styles from './OrderCard.module.css';

function OrderCard() {
	return (
		<li className={styles.item}>
			<div className={styles.container}>
				<div className={styles.orderInfoContainer}>
					<div className={styles.orderInfo}>
						<h2 className={styles.title}>Заказ от 23.02.2023</h2>
						<p className={styles.status}>Оформлен</p>
					</div>
					<p className={styles.totalPrice}>12323 ₽</p>
				</div>
				<p className={styles.orderId}>435345</p>
				<div className={styles.orderDetailsContainer}>
					<div className={styles.orderDetailsWrapper}>
						<h3 className={styles.deliveryType}>Доставка в пункт выдачи</h3>
						<p className={styles.deliveryDate}>Дата доставки 26.02.2023</p>
					</div>
					<ul className={styles.productList}>
						<li>
							<img
								className={styles.product}
								src={productImage}
								alt="иконка продукта"
							/>
						</li>
						<li>
							<img src={productImage} alt="иконка продукта" />
						</li>
						<li>
							<img src={productImage} alt="иконка продукта" />
						</li>
						<li>
							<img src={productImage} alt="иконка продукта" />
						</li>
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

export default OrderCard;
