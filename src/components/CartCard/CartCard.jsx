import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart, deleteFromCart } from '../../store/cart/cart-slice';
import styles from './CartCard.module.css';

import Like from '../UI/Like/Like';
import Delete from '../UI/Delete/Delete';
import placeholder from '../../assets/img/placeholder.png';
import Counter from '../UI/Counter/Counter';

function CartCard({
	id,
	title,
	article,
	inStock,
	img,
	discountPrice,
	price,
	quantity,
}) {
	const dispatch = useDispatch();
	const onLikeClick = () => {};

	const increaseCounter = () => {
		dispatch(addToCart({ product: id, quantity: quantity + 1 }));
	};
	const decreaseCounter = () => {
		dispatch(addToCart({ product: id, quantity: quantity - 1 }));
	};
	const onDeleteClick = () => {
		dispatch(deleteFromCart(id));
	};

	return (
		<div className={inStock ? styles.cardContainer : styles.cardContainerDisabled}>
			<article className={styles.card}>
				<div className={styles.cardContent}>
					<img
						className={styles.image}
						src={img}
						alt={title}
						onError={(e) => {
							e.currentTarget.src = placeholder;
						}}
					/>
					<div className={styles.descriptionWrapper}>
						<div className={styles.description}>
							<h2 className={styles.title}>{title}</h2>
							<p className={styles.captions}>
								арт.&nbsp;
								{article}
							</p>
							<p className={styles.captions}>
								в&nbsp;наличии&nbsp;
								{inStock}
								&nbsp;шт
							</p>
						</div>
						<div className={styles.counter}>
							{price !== discountPrice ? (
								<p className={styles.discountPrice}>
									{discountPrice}
									&nbsp;&#8381;&nbsp;
									<span className={styles.price}>
										{price}
										&nbsp;&#8381;
									</span>
								</p>
							) : (
								<p className={styles.priceWithoutDiscount}>
									{price}
									&nbsp;&#8381;
								</p>
							)}
							<Counter
								increaseFunction={increaseCounter}
								decreaseFunction={decreaseCounter}
								count={quantity}
								disabledDecrease={quantity <= 1}
								disabledIncrease={quantity >= inStock}
							/>
						</div>
					</div>
				</div>
				<div className={styles.buttons}>
					<Like onClick={onLikeClick} active={false} ariaLabel="like" />
					<Delete onClick={onDeleteClick} ariaLabel="delete" />
				</div>
			</article>
		</div>
	);
}

CartCard.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	article: PropTypes.number.isRequired,
	inStock: PropTypes.number.isRequired,
	discountPrice: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	img: PropTypes.string,
};

export default CartCard;
