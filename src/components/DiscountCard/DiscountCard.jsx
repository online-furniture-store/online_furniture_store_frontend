import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Discount.module.css';
import placeholder from '../../assets/img/placeholder.png';
import Like from '../UI/Like/Like';
import AddToCartButton from '../UI/AddToCartButton/AddToCartButton';

function DiscountCard({
	title,
	newPrice,
	oldPrice,
	img,
	existense,
	weight,
	load,
	material,
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
			<div className={styles.inner}>
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
							? styles.descriptionFastDeliveryCard
							: styles.descriptionDiscountCard
					}
				>
					<div
						className={
							fastDelivery ? styles.aboutPriceFastDelivery : styles.aboutPrice
						}
					>
						<p
							className={
								fastDelivery
									? `${styles.aboutPrice__new} ${styles.aboutPrice__newDelivery}`
									: `${styles.aboutPrice__new} ${styles.aboutPrice__newDiscount}`
							}
						>
							{newPrice}
							<span>&nbsp;&#8381;</span>
						</p>
						<p className={styles.aboutPrice__old}>
							{oldPrice}
							<span>&nbsp;&#8381;</span>
						</p>
					</div>
					<p className={styles.existence}>{`в наличии: ${existense} шт`}</p>
				</div>
				<div
					className={
						fastDelivery
							? `${styles.aboutCard} ${styles.aboutCardFastDelivery}`
							: `${styles.aboutCard} ${styles.aboutCardDiscount}`
					}
				>
					<div className={styles.aboutProperty}>
						<p className={styles.property}>Вес</p>
						<p className={styles.property}>{`${weight} кг`}</p>
					</div>
					<div className={styles.aboutProperty}>
						<p className={styles.property}>Макс. нагрузка</p>
						<p className={styles.property}>{`${load} кг`}</p>
					</div>
					<div className={styles.aboutProperty}>
						<p className={styles.property}>{'Материал\u00A0обивки'}</p>
						<p className={`${styles.property} ${styles.propertySize}`}>
							{material}
						</p>
					</div>
					<AddToCartButton onClick={onAddClick} isSuccess={isAdded} />
				</div>
			</div>
		</article>
	);
}

DiscountCard.propTypes = {
	title: PropTypes.string.isRequired,
	newPrice: PropTypes.number.isRequired,
	oldPrice: PropTypes.number.isRequired,
	img: PropTypes.string,
	existense: PropTypes.number.isRequired,
	weight: PropTypes.number.isRequired,
	load: PropTypes.number.isRequired,
	material: PropTypes.string.isRequired,
	fastDelivery: PropTypes.bool,
};

export default DiscountCard;
