import { useNavigate } from 'react-router-dom';
import styles from './CartSection.module.css';
import Title from '../../../UI/Title/Title';
import Checkbox from '../../../UI/Checkbox/Checkbox';
import CartCard from '../../../CartCard/CartCard';
import emptyCart from '../../../../assets/img/emptyCart.png';

const cards = [
	{
		id: '1',
		img: 'https://swiperjs.com/demos/images/nature-1.jpg',
		title: 'Диван Chess office',
		article: 12345678,
		inStock: 71,
		discountPrice: 42990,
		price: 49990,
	},
	{
		id: '2',
		img: 'https://swiperjs.com/demos/images/nature-2.jpg',
		title: 'Диван Chess office',
		article: 12345678,
		inStock: 71,
		discountPrice: 42990,
		price: 49990,
	},
	{
		id: '3',
		img: 'https://swiperjs.com/demos/images/nature-3.jpg',
		title: 'Диван Chess office',
		article: 12345678,
		inStock: 71,
		discountPrice: 42990,
		price: 49990,
	},
	{
		id: '4',
		img: 'https://swiperjs.com/demos/images/nature-4.jpg',
		title: 'Диван Chess office',
		article: 12345678,
		inStock: 71,
		discountPrice: 42990,
		price: 49990,
	},
	{
		id: '5',
		img: 'https://swiperjs.com/demos/images/nature-5.jpg',
		title: 'Диван Chess office',
		article: 12345678,
		inStock: 71,
		discountPrice: 42990,
		price: 49990,
	},
	{
		id: '6',
		img: 'https://swiperjs.com/demos/images/nature-6.jpg',
		title: 'Диван Chess office',
		article: 12345678,
		inStock: 71,
		discountPrice: 42990,
		price: 49990,
	},
	{
		id: '7',
		img: 'https://swiperjs.com/demos/images/nature-7.jpg',
		title: 'Диван Chess office',
		article: 12345678,
		inStock: 71,
		discountPrice: 42990,
		price: 49990,
	},
	{
		id: '8',
		img: 'https://swiperjs.com/demos/images/nature-8.jpg',
		title: 'Диван Chess office',
		article: 12345678,
		inStock: 71,
		discountPrice: 42990,
		price: 49990,
	},
];

function CartSection() {
	const navigate = useNavigate();

	const handleSelectAll = () => {};

	return cards.length ? (
		<section className={styles.container}>
			<Title titleText="Корзина" />
			<p className={styles.quantity}>
				{1}
				&nbsp;товар&nbsp;
				<span className={styles.weight}>
					&#8226;&nbsp;Вес&nbsp;&#8212;&nbsp;
					{75}
					кг
				</span>
			</p>
			<Checkbox checked onChange={handleSelectAll} label="Выбрать все" />
			<ul className={styles.productList}>
				{cards.map(
					({ id, img, title, article, inStock, discountPrice, price }) => (
						<li className={styles.product} key={id}>
							<CartCard
								title={title}
								article={article}
								inStock={inStock}
								discountPrice={discountPrice}
								price={price}
								img={img}
							/>
						</li>
					),
				)}
			</ul>
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
