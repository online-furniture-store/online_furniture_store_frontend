import PropTypes from 'prop-types';
import styles from './styles.module.css';
import placeholder from '../../../assets/img/placeholder.png';
import Like from '../Like/Like';

function DiscountCard({
	onLikeClick,
	likeActive,
	title,
	newPrice,
	oldPrice,
	img,
	isSale,
	existense,
	weight,
	load,
	material,
}) {
	return (
		<article className={styles.card}>
			<div className={styles.card__image}>
				<img
					src={img}
					onError={(e) => {
						e.currentTarget.src = placeholder;
					}}
					alt={`изображение товара: ${title}`}
					className={styles.card__picture}
				/>
				<div className={styles.card__sweets}>
					<div className={isSale ? styles.card__sale : styles.card__nonActive} />
					<div className={styles.card__likes}>
						<Like onClick={onLikeClick} active={likeActive} />
					</div>
				</div>
			</div>

			<h2 className={styles.card__title}>{title}</h2>
			<div className={styles.card__description}>
				<div className={styles.card__aboutPrice}>
					<p className={styles.card__new}>
						{newPrice}
						<span>&nbsp;&#8381;</span>
					</p>
					<p className={styles.card__old}>
						{oldPrice}
						<span>&nbsp;&#8381;</span>
					</p>
				</div>
				<p className={styles.card__existence}>{`в наличии: ${existense} шт`}</p>
			</div>
			<div className={styles.card__aboutCard}>
				<div className={styles.card__aboutProperty}>
					<p className={styles.card__property}>Вес</p>
					<p className={styles.card__property}>{`${weight} кг`}</p>
				</div>
				<div className={styles.card__aboutProperty}>
					<p className={styles.card__property}>Максимальная нагрузка</p>
					<p className={styles.card__property}>{`${load} кг`}</p>
				</div>
				<div className={styles.card__aboutProperty}>
					<p className={styles.card__property}>Материал обивки</p>
					<p className={styles.card__property}>{material}</p>
				</div>
				{/* <button/> */}
			</div>
		</article>
	);
}

DiscountCard.propTypes = {
	likeActive: PropTypes.bool.isRequired,
	onLikeClick: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	newPrice: PropTypes.number.isRequired,
	oldPrice: PropTypes.number.isRequired,
	img: PropTypes.string,
	isSale: PropTypes.bool.isRequired,
	existense: PropTypes.number.isRequired,
	weight: PropTypes.number.isRequired,
	load: PropTypes.number.isRequired,
	material: PropTypes.string.isRequired,
};

export default DiscountCard;
