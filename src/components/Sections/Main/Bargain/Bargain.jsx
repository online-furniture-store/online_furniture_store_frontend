import { useState, useRef, useEffect } from 'react';
import DiscountCard from '../../../DiscountCard/DiscountCard';
import Title from '../../../UI/Title/Title';
import styles from './Bargain.module.css';

function Bargain() {
	const slideImg = [
		{
			id: '1',
			img: 'https://swiperjs.com/demos/images/nature-1.jpg',
			title: 'Новая коллекция "Cozy office"',
		},
		{
			id: '2',
			img: 'https://swiperjs.com/demos/images/nature-2.jpg',
			title: 'Новая коллекция "Shmozy office"',
		},
		{
			id: '3',
			img: 'https://swiperjs.com/demos/images/nature-3.jpg',
			title: 'Новая коллекция "Lozy office"',
		},
		{
			id: '4',
			img: 'https://swiperjs.com/demos/images/nature-4.jpg',
			title: 'Новая коллекция "Zozy office"',
		},
		{
			id: '5',
			img: 'https://swiperjs.com/demos/images/nature-5.jpg',
			title: 'Новая коллекция "Pozy office"',
		},
		{
			id: '6',
			img: 'https://swiperjs.com/demos/images/nature-6.jpg',
			title: 'Новая коллекция "Ozy office"',
		},
		{
			id: '7',
			img: 'https://swiperjs.com/demos/images/nature-7.jpg',
			title: 'Новая коллекция "Dozy office"',
		},
		{
			id: '8',
			img: 'https://swiperjs.com/demos/images/nature-8.jpg',
			title: 'Новая коллекция "Gozy office"',
		},
	];

	const [isLike, setIsLike] = useState(false);
	const [isAdded, setIsAdded] = useState(false);

	const ref = useRef();

	useEffect(() => {
		const el = ref.current;
		if (el) {
			const onWheel = (e) => {
				e.preventDefault();
				el.scrollTo({
					left: el.scrollLeft + e.deltaY * 10,
					behavior: 'smooth',
				});
			};

			el.addEventListener('wheel', onWheel);

			return () => el.removeEventListener('wheel', onWheel);
		}
	}, []);

	const onAddClick = () => {
		setIsAdded(true);
	};
	const onLikeClick = () => {
		setIsLike(!isLike);
	};
	const data = {
		title: 'Диван Cozy Office Gray',
		newPrice: 42990,
		oldPrice: 49990,
		img: '',
		existense: 71,
		weight: 20,
		load: 100,
		material: 'Экокожа',
	};

	const title = 'Выгодная покупка';

	return (
		<section className={styles.wrapper}>
			<div className={styles.title}>
				<Title titleText={title} />
			</div>
			<div className={styles.bargain}>
				<ul ref={ref} className={styles.container}>
					{slideImg.map((item) => (
						<li key={item.id} className={styles.container__description}>
							<DiscountCard
								likeActive={isLike}
								onLikeClick={onLikeClick}
								img={item.img}
								title={item.title}
								newPrice={data.newPrice}
								oldPrice={data.oldPrice}
								isSale
								existense={data.existense}
								weight={data.weight}
								load={data.load}
								material={data.material}
								addActive={isAdded}
								onAddClick={onAddClick}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Bargain;
