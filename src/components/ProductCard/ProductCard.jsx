import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';
import placeholder from '../../assets/img/placeholder.png';
import Like from '../UI/Like/Like';
import AddToCartButton from '../UI/AddToCartButton/AddToCartButton';

function ProductCard({
	title,
	newPrice,
	oldPrice,
	img,
	inStock,
	weight,
	brand,
	country,
	fastDelivery,
}) {
	const [isLike, setIsLike] = useState(false);
	const [isAdded, setIsAdded] = useState(false);
	const onLikeClick = () => {
		setIsLike(!isLike);
	};
	const onAddClick = () => {
		setIsAdded(true);
	};
	return (
		<article
			className={
				fastDelivery
					? `${styles.card} ${styles.fastDeliveryCard}`
					: `${styles.card} ${styles.discountCard}`
			}
		>
			<div
				className={
					fastDelivery
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
								: `${styles.percentAndTruck} ${styles.discountPercent}`
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
				{fastDelivery ? (
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

				<p className={styles.inStock}>{`в наличии: ${inStock} шт`}</p>
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
			<AddToCartButton onClick={onAddClick} isSuccess={isAdded} />
		</article>
	);
}

ProductCard.propTypes = {
	title: PropTypes.string.isRequired,
	newPrice: PropTypes.string.isRequired,
	oldPrice: PropTypes.string.isRequired,
	img: PropTypes.string,
	inStock: PropTypes.number.isRequired,
	weight: PropTypes.number.isRequired,
	brand: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	fastDelivery: PropTypes.bool,
};

export default ProductCard;
