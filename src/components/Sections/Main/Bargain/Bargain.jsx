import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DiscountCard from '../../../DiscountCard/DiscountCard';
import Title from '../../../UI/Title/Title';
import styles from './Bargain.module.css';

function Bargain() {
	const { discountProducts } = useSelector((state) => state.products);
	// console.log(discountProducts);

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

	const data = {
		existense: 71,
		load: 100,
	};

	const title = 'Выгодная покупка';

	return (
		<section className={styles.wrapper}>
			<div className={styles.title}>
				<Title titleText={title} />
			</div>
			<div className={styles.bargain}>
				<ul ref={ref} className={styles.container}>
					{discountProducts.map((item) => (
						<li key={item.id} className={styles.description}>
							<DiscountCard
								img={item.image}
								title={item.name}
								newPrice={item.total_price}
								oldPrice={item.price}
								existense={data.existense}
								weight={item.weight}
								load={data.load}
								material={item.material[0].name}
								isSale
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Bargain;
