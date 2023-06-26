import PropTypes from 'prop-types';
import styles from './CartCard.module.css';
import Checkbox from '../UI/Checkbox/Checkbox';
import Counter from '../UI/counter/counter';
import Like from '../UI/Like/Like';
import Delete from '../UI/Delete/Delete';
import placeholder from '../../assets/img/placeholder.png';

function CartCard({ title, article, inStock, img, discountPrice, price }) {
	const onLikeClick = () => {};
	const handleSelect = () => {};
	const increaseCounter = () => {};
	const decreaseCounter = () => {};
	const onDeleteClick = () => {};

	return (
		<div className={styles.cardContainer}>
			<Checkbox checked onChange={handleSelect} />
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
							<p className={styles.discountPrice}>
								{discountPrice}
								&nbsp;&#8381;&nbsp;
								<span className={styles.price}>
									{price}
									&nbsp;&#8381;
								</span>
							</p>
							<Counter
								increaseFunction={increaseCounter}
								decreaseFunction={decreaseCounter}
								count={1}
								amount={inStock}
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
	title: PropTypes.string.isRequired,
	article: PropTypes.number.isRequired,
	inStock: PropTypes.number.isRequired,
	discountPrice: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	img: PropTypes.string,
};

export default CartCard;
