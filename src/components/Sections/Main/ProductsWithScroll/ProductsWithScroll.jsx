import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProductCard from '../../../ProductCard/ProductCard';
import Title from '../../../UI/Title/Title';
import styles from './ProductsWithScroll.module.css';

function ProductsWithScroll({ fastDelivery }) {
	const { discountProducts, fastDeliveryProducts } = useSelector(
		(state) => state.products,
	);

	const { cart } = useSelector((state) => state.cart);

	const ref = useRef();

	useEffect(() => {
		const el = ref.current;
		if (el) {
			const onWheel = (e) => {
				e.preventDefault();
				el.scrollTo({
					left: el.scrollLeft + e.deltaY * 5,
					behavior: 'smooth',
				});
			};

			el.addEventListener('wheel', onWheel);

			return () => el.removeEventListener('wheel', onWheel);
		}
	}, []);

	return (
		<section
			className={
				fastDelivery
					? `${styles.wrapper} ${styles.wrapperFastDelivery}`
					: `${styles.wrapper} ${styles.wrapperDiscount}`
			}
		>
			<div className={styles.title}>
				<Title
					titleText={
						fastDelivery ? 'Товары с быстрой доставкой' : 'Выгодная покупка'
					}
				/>
			</div>
			<div className={styles.bargain}>
				<ul
					ref={ref}
					className={
						fastDelivery
							? `${styles.container} ${styles.containerFastDelivery}`
							: `${styles.container} ${styles.containerDiscount}`
					}
				>
					{(fastDelivery ? fastDeliveryProducts : discountProducts).map(
						(item) => (
							<li key={item.id} className={styles.description}>
								<ProductCard
									id={item.id}
									img={item.image}
									title={item.name}
									newPrice={item.total_price.toLocaleString()}
									oldPrice={item.price.toLocaleString()}
									inStock={item.available_quantity}
									weight={item.weight}
									brand={item.brand}
									country={item.country}
									fastDelivery={fastDelivery}
									added={cart.products.some(({ product }) => product.id === item.id)}
								/>
							</li>
						),
					)}
				</ul>
			</div>
		</section>
	);
}

ProductsWithScroll.propTypes = {
	fastDelivery: PropTypes.bool,
};

export default ProductsWithScroll;
