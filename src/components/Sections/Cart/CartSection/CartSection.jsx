import styles from './CartSection.module.css';
import Title from '../../../UI/Title/Title';
import Checkbox from '../../../UI/Checkbox/Checkbox';
import CartCard from '../../../CartCard/CartCard';
// import Counter from '../../../UI/counter/counter';
// import Like from '../../../UI/Like/Like';
// import Delete from '../../../UI/Delete/Delete';
// import placeholder from '../../../../assets/img/placeholder.png';
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
	const handleSelectAll = () => {};

	return (
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
	);
}

export default CartSection;
