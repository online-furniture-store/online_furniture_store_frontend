import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from './PopularProductCard.module.css';
import Like from '../UI/Like/Like';
import placeholder from '../../assets/img/placeholder.png';
import { deleteFromFavorites, addToFavorites } from '../../store/favorites/favorites-slice';

function PopularProductCard({
	id,
	img,
	productName,
	productPrice,
	inFavorites,
	onClick,
}) {
	const location = useLocation();
	const dispatch = useDispatch();
	const handleLikeClick = () => {
		if (inFavorites) {
			dispatch(deleteFromFavorites(id));
		} else dispatch(addToFavorites({ product: id }));
	};
	return (
		<>
			{location.pathname === '/cart' && (
				<div onClick={onClick} className={styles.productCard}>
					<img
						className={styles.img}
						src={img}
						alt={`Фото ${productName}`}
						onError={(e) => {
							e.currentTarget.src = placeholder;
						}}
					/>
					<div className={`${styles.likeLocationCart} ${styles.like}`}>
						<Like onClick={handleLikeClick} active={inFavorites} ariaLabel="like" />
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
				<div onClick={onClick} className={styles.productCard}>
					<img
						className={styles.img}
						src={img}
						alt={`Фото ${productName}`}
						onError={(e) => {
							e.currentTarget.src = placeholder;
						}}
					/>
					<div className={`${styles.likeLocationCart} ${styles.like}`}>
						<Like onClick={handleLikeClick} active={inFavorites} ariaLabel="like" />
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
				<div onClick={onClick} className={styles.productCard}>
					<img
						className={styles.img}
						src={img}
						alt={`Фото ${productName}`}
						onError={(e) => {
							e.currentTarget.src = placeholder;
						}}
					/>
					<div className={styles.like}>
						<Like onClick={handleLikeClick} active={inFavorites} ariaLabel="like" />
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
	id: PropTypes.number,
	img: PropTypes.string,
	productName: PropTypes.string,
	productPrice: PropTypes.number,
	onClick: PropTypes.func,
	inFavorites: PropTypes.bool,
};

export default PopularProductCard;
