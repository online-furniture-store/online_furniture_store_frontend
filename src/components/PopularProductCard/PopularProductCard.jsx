import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PopularProductCard.module.css';
import Like from '../UI/Like/Like';
import placeholder from '../../assets/img/placeholder.png';

function PopularProductCard({
	img,
	productName,
	productPrice,
	productFavorited,
}) {
	const location = useLocation();
	const [isLike, setIsLike] = useState(productFavorited);
	const handleClick = () => {
		setIsLike(!isLike);
	};
	return (
		<>
			{location.pathname === '/cart' && (
				<div className={styles.productCard}>
					<img
						className={styles.img}
						src={img}
						alt={`Фото ${productName}`}
						onError={(e) => {
							e.currentTarget.src = placeholder;
						}}
					/>
					<div className={`${styles.likeLocationCart} ${styles.like}`}>
						<Like onClick={handleClick} active={isLike} ariaLabel="like" />
					</div>
					<div
						className={`${styles.productInfo} ${styles.productInfoLocationCart}`}
					>
						<span className={styles.productName}>{productName}</span>
						<span className={styles.productPrice}>{`${productPrice} ₽`}</span>
					</div>
				</div>
			)}
			{location.pathname === '/favorites' && (
				<div className={styles.productCard}>
					<img
						className={styles.img}
						src={img}
						alt={`Фото ${productName}`}
						onError={(e) => {
							e.currentTarget.src = placeholder;
						}}
					/>
					<div className={`${styles.likeLocationCart} ${styles.like}`}>
						<Like onClick={handleClick} active={isLike} ariaLabel="like" />
					</div>
					<div
						className={`${styles.productInfo} ${styles.productInfoLocationCart}`}
					>
						<span className={styles.productName}>{productName}</span>
						<span className={styles.productPrice}>{`${productPrice} ₽`}</span>
					</div>
				</div>
			)}
			{location.pathname === '/' && (
				<div className={styles.productCard}>
					<img
						className={styles.img}
						src={img}
						alt={`Фото ${productName}`}
						onError={(e) => {
							e.currentTarget.src = placeholder;
						}}
					/>
					<div className={styles.like}>
						<Like onClick={handleClick} active={isLike} ariaLabel="like" />
					</div>
					<div className={styles.productInfo}>
						<span className={styles.productName}>{productName}</span>
						<span className={styles.productPrice}>{`${productPrice} ₽`}</span>
					</div>
				</div>
			)}
		</>
	);
}

PopularProductCard.propTypes = {
	img: PropTypes.string,
	productName: PropTypes.string,
	productPrice: PropTypes.number,
	productFavorited: PropTypes.bool,
};

export default PopularProductCard;
