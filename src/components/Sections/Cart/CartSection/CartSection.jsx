import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './CartSection.module.css';
import TotalPrice from '../../../TotalPrice/TotalPrice';
import Title from '../../../UI/Title/Title';
import CartCard from '../../../CartCard/CartCard';
import emptyCart from '../../../../assets/img/emptyCart.png';

function CartSection() {
	const { cart } = useSelector((state) => state.cart);

	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	const generateProductText = (quantity) => {
		if (quantity > 1 && quantity <= 4) return '\u00A0товара\u00A0';
		if (quantity > 4) return '\u00A0товаров\u00A0';
		return '\u00A0товар\u00A0';
	};

	return cart.total_quantity ? (
		<section className={styles.container}>
			<Title titleText="Корзина" />
			<p className={styles.quantity}>
				{cart.total_quantity}
				{generateProductText(cart.total_quantity)}
				<span className={styles.weight}>
					&#8226;&nbsp;Вес&nbsp;&#8212;&nbsp;
					{cart.total_weight}
					кг
				</span>
			</p>
			<div className={styles.products}>
				<ul className={styles.productList}>
					{cart.products?.map(({ product, quantity }) => (
						<li className={styles.product} key={product.id}>
							<CartCard
								id={product.id}
								title={product.name}
								article={product.article}
								inStock={product.available_quantity}
								discountPrice={product.total_price}
								price={product.price}
								img={product.image}
								quantity={quantity}
							/>
						</li>
					))}
				</ul>
				<TotalPrice
					discount={cart.total_price - cart.total_discount_price}
					count={cart.total_quantity || 0}
					weight={cart.total_weight}
					totalPrice={cart.total_discount_price}
					days={7}
					lastPrice={cart.total_price}
				/>
			</div>
		</section>
	) : (
		<section className={`${styles.container} ${styles.emptyCartContainer}`}>
			<Title titleText="Корзина" />
			<p className={styles.emptyText}>В вашей корзине пока нет товаров</p>
			<button
				className={styles.toShopingButton}
				onClick={() => navigate('/')}
				type="button"
			>
				Перейти к покупкам
			</button>
			<img
				className={styles.emptyCartImg}
				src={emptyCart}
				alt="пустая корзина"
			/>
		</section>
	);
}

export default CartSection;
