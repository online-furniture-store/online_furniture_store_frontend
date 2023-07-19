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

function ProductsWithScroll({ fastDelivery, sameProduct }) {
	const { discountProducts, fastDeliveryProducts } = useSelector(
		(state) => state.products,
	);
	const { furniture } = useSelector((state) => state.furniture);

	const { cart } = useSelector((state) => state.cart);

	const swiperOptions = () => {
		return fastDelivery ? productDeliverySlider : productDiscountSlider;
	};
	const defineTitleText = () => {
		if (fastDelivery) {
			return 'Товары с быстрой доставкой';
		} if (sameProduct) {
			return '';
		}
		return 'Выгодная покупка';
	};

	const defineArrayProducts = () => {
		if (fastDelivery) {
			return fastDeliveryProducts;
		} if (sameProduct) {
			return furniture.similar_products;
		}
		return discountProducts;
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
					titleText={defineTitleText()}
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
				{(defineArrayProducts()).map(
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
									(elem) => elem.product.id === item.id,
								)}
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
	sameProduct: PropTypes.bool,
};

export default ProductsWithScroll;
