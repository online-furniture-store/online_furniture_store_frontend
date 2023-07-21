import { useSelector } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import styles from './PopularProducts.module.css';
import Title from '../../UI/Title/Title';
import PopularProductCard from '../../PopularProductCard/PopularProductCard';

function PopularProducts() {
	const { popularProducts } = useSelector((state) => state.products);
	const location = useLocation();
	return (
		<section className={styles.section}>
			<div
				className={
					location.pathname === '/cart'
						? `${styles.container} ${styles.containerLocationCart}`
						: styles.container
				}
			>
				<NavLink className={styles.link} to="/under-construction">
					<Title titleText="Популярные товары" />
				</NavLink>
				{location.pathname === '/cart' || location.pathname === '/favorites' ? (
					<div className={`${styles.grid} ${styles.gridLocationCart}`}>
						{popularProducts.map((item) => (
							<PopularProductCard
								key={item.id}
								img={item.images ? item.images.first_image : 'https://ofs.proninteam.ru/media/%D0%B1%D0%B0%D0%BD…%D0%B3%D0%BC%D0%B0_%D0%BC%D0%B0%D0%BB_EMKAvfc.png'}
								productName={item.name}
								productPrice={item.total_price}
								productFavorited={item.is_favorited}
							/>
						))}
					</div>
				) : (
					<div className={styles.grid}>
						<div className={styles.leftColumn}>
							{popularProducts.slice(0, 3).map((item, index) => (
								<div className={styles[`box${index}`]} key={item.id}>
									<PopularProductCard
										img={item.images ? item.images.first_image : 'https://ofs.proninteam.ru/media/%D0%B1%D0%B0%D0%BD…%D0%B3%D0%BC%D0%B0_%D0%BC%D0%B0%D0%BB_EMKAvfc.png'}
										productName={item.name}
										productPrice={item.total_price}
										productFavorited={item.is_favorited}
									/>
								</div>
							))}
						</div>
						<div className={styles.rightColumn}>
							{popularProducts.slice(3).map((item, index) => (
								<div className={styles[`box${index}`]} key={item.id}>
									<PopularProductCard
										img={item.images ? item.images.first_image : 'https://ofs.proninteam.ru/media/%D0%B1%D0%B0%D0%BD…%D0%B3%D0%BC%D0%B0_%D0%BC%D0%B0%D0%BB_EMKAvfc.png'}
										productName={item.name}
										productPrice={item.total_price}
										productFavorited={item.is_favorited}
									/>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default PopularProducts;
