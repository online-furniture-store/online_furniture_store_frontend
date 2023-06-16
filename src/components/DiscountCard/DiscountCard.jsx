import PropTypes from 'prop-types';
import styles from './Discount.module.css';
import placeholder from '../../assets/img/placeholder.png';
import Like from '../UI/Like/Like';
import AddToCartButton from '../UI/AddToCartButton/AddToCartButton';

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
	onAddClick,
	addActive,
}) {
	return (
		<article className={styles.card}>
			<div className={styles.image}>
				<img
					src={img}
					onError={(e) => {
						e.currentTarget.src = placeholder;
					}}
					alt={`изображение товара: ${title}`}
					className={styles.image__picture}
				/>
				<div className={styles.sweets}>
					<div className={isSale ? styles.sale : styles.nonActive} />
					<div className={styles.likes}>
						<Like onClick={onLikeClick} active={likeActive} />
					</div>
				</div>
			</div>

			<h2 className={styles.title}>{title}</h2>
			<div className={styles.description}>
				<div className={styles.aboutPrice}>
					<p className={styles.aboutPrice__new}>
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
			<div className={styles.aboutCard}>
				<div className={styles.aboutProperty}>
					<p className={styles.property}>Вес</p>
					<p className={styles.property}>{`${weight} кг`}</p>
				</div>
				<div className={styles.aboutProperty}>
					<p className={styles.property}>Максимальная нагрузка</p>
					<p className={styles.property}>{`${load} кг`}</p>
				</div>
				<div className={styles.aboutProperty}>
					<p className={styles.property}>Материал обивки</p>
					<p className={styles.property}>{material}</p>
				</div>
				<AddToCartButton onClick={onAddClick} isSuccess={addActive} />
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
	onAddClick: PropTypes.func.isRequired,
	addActive: PropTypes.bool.isRequired,
};

export default DiscountCard;
