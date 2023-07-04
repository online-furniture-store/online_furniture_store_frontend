import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import BlackButton from '../UI/BlackButton/BlackButton';
import styles from './TotalPrice.module.css';

function TotalPrice({ discount, count, weight, totalPrice, days, lastPrice }) {
	const location = useLocation();
	return (
		<div className={styles.container}>
			{discount && (
				<div className={styles.discountSection}>
					<p className={styles.discountText}>
						Скидка: &nbsp;
						<span className={styles.discount}>
							{discount}
							<span>&nbsp;&#8381;</span>
						</span>
					</p>
					<p className={styles.lastPrice}>
						{lastPrice}
						<span>&nbsp;&#8381;</span>
					</p>
				</div>
			)}
			<p className={styles.productsCount}>
				товары (
          {count}
          )
        <span className={styles.dot}>&#8226;</span>
				{`${weight} кг`}
			</p>
			<div className={styles.totalContainer}>
				<p className={styles.totalPrice}>Итого</p>
				<p className={styles.totalPrice}>
					{totalPrice}
					<span>&nbsp;&#8381;</span>
				</p>
			</div>
			<BlackButton onClick={() => {}} buttonText="Оформить заказ" />

			{location.pathname === '/cart' ? (
				<>
					<p className={styles.deliveryTime}>{`Доставим через ${days} дней`}</p>
					<Link to="/" className={styles.deliveryCost}>
						Стоимость доставки и сборки
					</Link>
				</>
			) : (
				<p className={styles.argeement}>
					Нажимая на кнопку, я даю
					<Link to="/" className={styles.link}>
						согласие
					</Link>
					на обработку персональных данных в соответствии с
					<Link to="/" className={styles.link}>
						Политикой
					</Link>
					, соглашаюсь с
					<Link to="/" className={styles.link}>
						Правилами
					</Link>
				</p>
			)}
		</div>
	);
}
TotalPrice.propTypes = {
	discount: PropTypes.number,
	count: PropTypes.number.isRequired,
	lastPrice: PropTypes.number,
	weight: PropTypes.number.isRequired,
	totalPrice: PropTypes.number,
	days: PropTypes.number.isRequired,
};

export default TotalPrice;
