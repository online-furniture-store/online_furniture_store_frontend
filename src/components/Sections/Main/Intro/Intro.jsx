import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import styles from './Intro.module.css';
import placeholder from '../../../../assets/img/placeholder.png';

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

function Intro() {
	const swiperRef = useRef();

	return (
		<section className={styles.container}>
			<Swiper
				modules={[Navigation, Pagination]}
				slidesPerView={1}
				allowTouchMove={false}
				pagination={{
					el: `.${styles.pagination}`,
					clickable: true,
				}}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: false,
				}}
				className={styles.slider}
			>
				{slideImg.map(({ id, img, title }) => (
					<SwiperSlide key={id} className={styles.slide}>
						<div className={styles.description}>
							<h2 className={styles.title}>{title}</h2>
							<Link className={styles.link} to="/">
								Подробнее
							</Link>
						</div>
						<img
							className={styles.img}
							src={img}
							alt=""
							onError={(e) => {
								e.currentTarget.src = placeholder;
							}}
						/>
					</SwiperSlide>
				))}
				<button
					className={styles.prev}
					type="button"
					onClick={() => swiperRef.current?.slidePrev()}
				/>
				<button
					className={styles.next}
					type="button"
					onClick={() => swiperRef.current?.slideNext()}
				/>
			</Swiper>
			<div className={styles.pagination} />
		</section>
	);
}

export default Intro;
