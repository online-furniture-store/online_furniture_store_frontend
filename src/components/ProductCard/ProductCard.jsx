import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';
import placeholder from '../../assets/img/placeholder.png';
import Like from '../UI/Like/Like';
import AddToCartButton from '../UI/AddToCartButton/AddToCartButton';
import { addToCart } from '../../store/cart/cart-slice';

function ProductCard({
	id,
	title,
	newPrice,
	oldPrice,
	img,
	inStock,
	weight,
	brand,
	country,
	fastDelivery,
	added,
	isSmall,
	onClick,

}) {
	const dispatch = useDispatch();
	const [isLike, setIsLike] = useState(false);
	const onLikeClick = () => {
		setIsLike(!isLike);
	};
	const onAddClick = () => {
		dispatch(addToCart({ product: id, quantity: 1 }));
	};
	return (
		<div
			className={
				isSmall
					? `${styles.card} ${styles.fastDeliveryCard}`
					: `${styles.card} ${styles.discountCard}`
			}
			onClick={onClick}
		>
			<div
				className={
					isSmall
						? `${styles.image} ${styles.imageFastDelivery}`
						: `${styles.image} ${styles.imageDiscountCard}`
				}
			>
				<img
					src={img}
					onError={(e) => {
						e.currentTarget.src = placeholder;
					}}
					loading="lazy"
					alt={`изображение товара: ${title}`}
					className={styles.image__picture}
				/>
				<div className={styles.sweets}>
					<div
						className={
							fastDelivery
								? `${styles.percentAndTruck} ${styles.truckDelivery}`
								: `${styles.none}`
						}
					/>
					<div
						className={
							newPrice !== oldPrice
								? `${styles.percentAndTruck} ${styles.discountPercent}`
								: `${styles.none}`
						}
					/>

					<div className={styles.likes}>
						<Like onClick={onLikeClick} active={isLike} ariaLabel="like" />
					</div>
				</div>
			</div>
			<h2 className={styles.title}>{title}</h2>

			<div
				className={
					fastDelivery
						? `${styles.description} ${styles.descriptionFastDelivery}`
						: `${styles.description} ${styles.descriptionDiscountCard}`
				}
			>
				{newPrice === oldPrice ? (
					<div className={styles.price__FastDelivery}>
						<p className={styles.price__new_fastDelivery}>
							{oldPrice}
							<span>&nbsp;&#8381;</span>
						</p>
					</div>
				) : (
					<div className={styles.price}>
						<p className={styles.price__new_discountCard}>
							{newPrice}
							<span>&nbsp;&#8381;</span>
						</p>
						<p className={styles.price__old_discountCard}>
							{oldPrice}
							<span>&nbsp;&#8381;</span>
						</p>
					</div>
				)}

				<p className={styles.inStock}>
					{inStock ? `в наличии: ${inStock} шт` : 'нет в наличии'}
				</p>
			</div>

			<div className={styles.aboutProperty}>
				<p className={styles.property}>Вес</p>
				<p className={styles.property}>{`${weight} кг`}</p>
			</div>
			<div className={styles.aboutProperty}>
				<p className={styles.property}>Бренд</p>
				<p className={styles.property}>{brand}</p>
			</div>
			<div className={styles.aboutProperty}>
				<p className={styles.property}>Страна</p>
				<p className={styles.property}>{country}</p>
			</div>
			<AddToCartButton onClick={onAddClick} isSuccess={added} />
		</div>
	);
}

ProductCard.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.number,
	newPrice: PropTypes.string.isRequired,
	oldPrice: PropTypes.string.isRequired,
	img: PropTypes.string,
	inStock: PropTypes.number.isRequired,
	weight: PropTypes.number.isRequired,
	brand: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	fastDelivery: PropTypes.bool,
	added: PropTypes.bool,
	isSmall: PropTypes.bool,
	onClick: PropTypes.func,
};

export default ProductCard;
