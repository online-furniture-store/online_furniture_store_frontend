import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productDiscountSlider } from '../../../../utils/productDiscountSlider';
import { productDeliverySlider } from '../../../../utils/productDeliverySlider';
import ProductCard from '../../../ProductCard/ProductCard';
import Title from '../../../UI/Title/Title';
import styles from './ProductsWithScroll.module.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

function ProductsWithScroll({ fastDelivery, isSmall }) {
	const { discountProducts, fastDeliveryProducts } = useSelector(
		(state) => state.products,
	);

	const { cart } = useSelector((state) => state.cart);

	const swiperOptions = () => {
		return fastDelivery ? productDeliverySlider : productDiscountSlider;
	};

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
			<Swiper
				{...swiperOptions()}
				className={
					fastDelivery
						? `${styles.container} ${styles.containerFastDelivery}`
						: `${styles.container} ${styles.containerDiscount}`
				}
			>
				{(fastDelivery ? fastDeliveryProducts : discountProducts).map(
					(item) => (
						<SwiperSlide key={item.id} className={styles.description}>
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
								added={cart.products.some(
									({ product }) => product.id === item.id,
								)}
								isSmall={isSmall}
							/>
						</SwiperSlide>
					),
				)}
			</Swiper>
		</section>
	);
}

ProductsWithScroll.propTypes = {
	fastDelivery: PropTypes.bool,
	isSmall: PropTypes.bool,
};

export default ProductsWithScroll;
