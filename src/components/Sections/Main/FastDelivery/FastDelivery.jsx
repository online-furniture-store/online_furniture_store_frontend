import styles from './FastDelivery.module.css';
import Title from '../../../UI/Title/Title';
import FastDeliveryCard from '../../../FastDeliveryCard/FastDeliveryCard';

function FastDelivery() {
	const slideImg = [
		{
			id: '1',
			img: 'https://swiperjs.com/demos/images/nature-1.jpg',
			title: 'Новая коллекция "Cozy office"',
			isFastDelivery: true,
			price: 1234,
		},
		{
			id: '2',
			img: 'https://swiperjs.com/demos/images/nature-2.jpg',
			title: 'Новая коллекция "Shmozy office"',
			isFastDelivery: true,
			price: 1234,
		},
		{
			id: '3',
			img: 'https://swiperjs.com/demos/images/nature-3.jpg',
			title: 'Новая коллекция "Lozy office"',
			isFastDelivery: true,
			price: 1234,
		},
		{
			id: '4',
			img: 'https://swiperjs.com/demos/images/nature-4.jpg',
			title: 'Новая коллекция "Zozy office"',
			isFastDelivery: true,
			price: 1234,
		},
	];
	return (
		<section className={styles.section}>
			<Title titleText="Товары с быстрой доставкой" />
			<ul className={styles.container}>
				{slideImg.map((item) => (
					<li key={item.id} className={styles.card}>
						<FastDeliveryCard
							img={item.img}
							title={item.title}
							price={item.price}
							likeActive={item.likeActive}
							isFastDelivery={item.isFastDelivery}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}
export default FastDelivery;
