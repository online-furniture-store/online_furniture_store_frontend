/* eslint-disable */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../store/cart/cart-slice';
import styles from './LargeCard.module.css';
import placeholder from '../../assets/img/placeholder.png';
import Like from '../UI/Like/Like';
import BlackButton from '../UI/BlackButton/BlackButton';
import AddToCartButton from '../UI/AddToCartButton/AddToCartButton';

function LargeCard({
	isFavorited,
	brand,
	id,
	images,
	name,
	article,
	discount,
	totalPrice,
	added,
	price,
	availableQuantity,
}) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [largeCard, setLargeCard] = useState(images[0]);
	const [isLike, setIsLike] = useState(isFavorited);
	const handleClick = () => {
		setIsLike(!isLike);
	};
	return (
		<div className={styles.card}>
			<div className={styles.wrapper}>
				<img
					className={styles.image}
					src={largeCard}
					alt={`Фото ${brand}`}
					onError={(e) => {
						e.currentTarget.src = placeholder;
					}}
				/>
			</div>
			<div className={styles.imgContainer}>
				{images.map((item) => {
					return (
						<button
							className={
								item === largeCard
									? `${styles.imgBtn} ${styles.imgBtnSelected}`
									: styles.imgBtn
							}
							type="button"
							key={uuidv4()}
							onClick={() => {
								setLargeCard(item);
							}}
						>
							<img
								className={styles.image}
								src={item}
								alt={`Фото ${brand}`}
								onError={(e) => {
									e.currentTarget.src = placeholder;
								}}
							/>
						</button>
					);
				})}
			</div>
			<div className={styles.info}>
				<div className={styles.likeContainer}>
					{' '}
					<Like onClick={handleClick} active={!isLike} ariaLabel="like" />
				</div>
				<span className={styles.name}>{name}</span>
				<span className={styles.brand}>{brand}</span>
				<span className={styles.article}>{`арт. ${article}`}</span>
				<div className={styles.priceContainer}>
					<span
						className={
							discount
								? `${styles.totalPrice} ${styles.totalPricediscounted}`
								: styles.totalPrice
						}
					>
						{`${totalPrice} ₽`}
					</span>
					{discount !== 0 && (
						<>
							<span className={styles.price}>{`${price} ₽`}</span>
							<span className={styles.discount}>{`-${discount}%`}</span>
						</>
					)}
				</div>
				<div className={styles.radioButtons}>
					<input
						className={styles.radioButton}
						type="radio"
						name="radio-group"
						id="black-button"
					/>
					<label className={styles.label} htmlFor="black-button">
						<div className={styles.blackButton} />
					</label>
					<input
						className={styles.radioButton}
						type="radio"
						id="yellow-button"
						name="radio-group"
					/>
					<label className={styles.label} htmlFor="yellow-button">
						<div className={styles.yellowButton} />
					</label>
				</div>
				{availableQuantity ? (
					<AddToCartButton
						text="В корзину"
						onClick={() => dispatch(addToCart({ product: id, quantity: 1 }))}
						isSuccess={added}
					/>
				) : (
					<BlackButton
						type="submit"
						buttonText="Узнать о поступлении"
						onClick={() => navigate('/sale')}
					/>
				)}
				{availableQuantity ? (
					<span className={styles.inStock}>
						{`в наличии ${availableQuantity} шт`}
					</span>
				) : (
					<span className={styles.notAvailable}>Товара нет в наличии</span>
				)}
				<span className={styles.text}>Стоимость доставки и сборки</span>
			</div>
		</div>
	);
}

LargeCard.propTypes = {
	isFavorited: PropTypes.bool,
	brand: PropTypes.string,
	images: PropTypes.arrayOf(PropTypes.string),
	name: PropTypes.string,
	article: PropTypes.number,
	id: PropTypes.string,
	discount: PropTypes.number,
	totalPrice: PropTypes.number,
	price: PropTypes.number,
	added: PropTypes.bool,
	availableQuantity: PropTypes.number,
};

export default LargeCard;
