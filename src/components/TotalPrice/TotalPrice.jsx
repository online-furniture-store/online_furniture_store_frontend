import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import repeat from '../../assets/img/repeat.svg';
import BlackButton from '../UI/BlackButton/BlackButton';
import styles from './TotalPrice.module.css';

function TotalPrice({
	discount,
	count,
	weight,
	totalPrice,
	days,
	lastPrice,
	buttonText,
	onClick,
}) {
	const location = useLocation();
	return (
		<div className={styles.container}>
			{location.pathname === '/cart' && (
				<>
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
						товары ({count})<span className={styles.dot}>&#8226;</span>
						{`${weight} кг`}
					</p>
					<div className={styles.totalContainer}>
						<p className={styles.totalPrice}>Итого</p>
						<p className={styles.totalPrice}>
							{totalPrice}
							<span>&nbsp;&#8381;</span>
						</p>
					</div>
					<BlackButton
						type="button"
						onClick={onClick}
						buttonText={buttonText}
						buttonLarge
					/>
					<p className={styles.deliveryTime}>{`Доставим через ${days} дней`}</p>
					<Link to="/under-construction" className={styles.deliveryCost}>
						Стоимость доставки и сборки
					</Link>
				</>
			)}
			{location.pathname === '/order-form' && (
				<>
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
						товары ({count})<span className={styles.dot}>&#8226;</span>
						{`${weight} кг`}
					</p>
					<div className={styles.totalContainer}>
						<p className={styles.totalPrice}>Итого</p>
						<p className={styles.totalPrice}>
							{totalPrice}
							<span>&nbsp;&#8381;</span>
						</p>
					</div>
					<BlackButton
						type="submit"
						onClick={onClick}
						buttonText={buttonText}
						buttonLarge
					/>
					<p className={styles.argeement}>
						Нажимая на кнопку, я даю&nbsp;
						<Link to="/rules-consent" target="_blanck" className={styles.link}>
							согласие &nbsp;
						</Link>
						на обработку персональных данных в соответствии с&nbsp;
						<Link to="/rules-data" target="_blanck" className={styles.link}>
							Политикой
						</Link>
						, соглашаюсь с&nbsp;
						<Link to="/rules-sale" target="_blanck" className={styles.link}>
							Правилами
						</Link>
					</p>
				</>
			)}
			{location.pathname === '/order' && (
				<>
					<div className={styles.discountSection}>
						<p className={styles.paymentText}>Оплачено картой онлайн</p>
					</div>
					<p className={styles.productsCount}>
						товары ({count})<span className={styles.dot}>&#8226;</span>
						{`${weight} кг`}
					</p>
					<div className={styles.totalContainer}>
						<p className={styles.totalPrice}>Итого</p>
						<p className={styles.totalPrice}>
							{totalPrice}
							<span>&nbsp;&#8381;</span>
						</p>
					</div>
					<div className={styles.repeatContainer}>
						<img src={repeat} alt="repeat" className={styles.repeatImg} />
						<p className={styles.repeatText}>Повторить заказ</p>
					</div>
				</>
			)}
		</div>
	);
}
TotalPrice.propTypes = {
	discount: PropTypes.number,
	count: PropTypes.number.isRequired,
	lastPrice: PropTypes.number,
	weight: PropTypes.number,
	totalPrice: PropTypes.number,
	days: PropTypes.number.isRequired,
	buttonText: PropTypes.string,
	onClick: PropTypes.func,
};
export default TotalPrice;
