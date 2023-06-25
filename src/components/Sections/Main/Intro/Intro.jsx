import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { introSlider } from '../../../../utils/introSlider';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import styles from './Intro.module.css';
import placeholder from '../../../../assets/img/placeholder.png';

function Intro() {
	const { collections } = useSelector((state) => state.products);

	const swiperRef = useRef();

	return (
		<section className={styles.container}>
			<Swiper
				{...introSlider}
				pagination={{
					el: `.${styles.pagination}`,
					clickable: true,
				}}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				className={styles.slider}
			>
				{collections.map(({ id, name, image }) => (
					<SwiperSlide key={id} className={styles.slide}>
						<div className={styles.description}>
							{!image.includes('noimage_detail.png') && (
								<>
									<h2 className={styles.title}>
										Новая коллекция&NewLine;
										{name}
									</h2>
									<Link className={styles.link} to="/">
										Подробнее
									</Link>
								</>
							)}
						</div>
						<img
							className={styles.img}
							src={image}
							alt={name}
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
