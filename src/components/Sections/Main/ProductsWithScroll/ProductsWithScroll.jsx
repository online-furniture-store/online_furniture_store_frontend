import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productDiscountSlider } from '../../../../utils/productDiscountSlider';
import { productDeliverySlider } from '../../../../utils/productDeliverySlider';
import ProductCard from '../../../ProductCard/ProductCard';
import Title from '../../../UI/Title/Title';
import styles from './ProductsWithScroll.module.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

function ProductsWithScroll({ icon, isSmall, sameProduct }) {
	const navigate = useNavigate();

	const { discountProducts, fastDeliveryProducts } = useSelector(
		(state) => state.products,
	);
	const { furniture } = useSelector((state) => state.furniture);

	const { cart } = useSelector((state) => state.cart);

	const swiperOptions = () => {
		return icon === 'delivery' ? productDeliverySlider : productDiscountSlider;
	};
	const defineTitleText = () => {
		if (icon === 'delivery') {
			return 'Товары с быстрой доставкой';
		}
		if (sameProduct) {
			return '';
		}
		return 'Выгодная покупка';
	};

	const defineArrayProducts = () => {
		if (icon === 'delivery') {
			return fastDeliveryProducts;
		}
		if (sameProduct) {
			return furniture.similar_products;
		}
		return discountProducts;
	};
	return (
		<section className={`${styles.wrapper} ${styles.wrapperDiscount}`}>
			<div className={styles.title}>
				<Title titleText={defineTitleText()} />
			</div>
			<Swiper
				{...swiperOptions()}
				className={`${styles.container} ${styles.containerDiscount}`}
			>
				{defineArrayProducts().map((item) => (
					<SwiperSlide key={item.id} className={styles.description}>
						<ProductCard
							id={item.id}
							img={item.images ? item.images.first_image : ''}
							title={item.name}
							newPrice={item.total_price.toLocaleString()}
							oldPrice={item.price.toLocaleString()}
							inStock={item.available_quantity}
							weight={item.weight}
							brand={item.brand}
							country={item.country}
							icon={icon}
							added={cart.products.some((elem) => elem.product.id === item.id)}
							isSmall={isSmall}
							onClick={() => {
								navigate(`/product/${item.id}`);
							}}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

ProductsWithScroll.propTypes = {
	fastDelivery: PropTypes.bool,
	isSmall: PropTypes.bool,
	sameProduct: PropTypes.bool,
	icon: PropTypes.string,
};

export default ProductsWithScroll;
