import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import styles from './Favorites.module.css';
import ProductCard from '../../ProductCard/ProductCard';
import Title from '../../UI/Title/Title';

function Favorites() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	const items = [
		{
			article: 2147483647,
			id: 15267444,
			name: 'Тинта',
			price: 12345,
			image:
				'https://ofs.proninteam.ru/media/2_ulWu6gg.png',
			category: {
				name: 'string',
				slug: '_kENYGHjOmUXBOPW3ZPBaQ31fMrm4EOcX3P9RXq5snUF6XE52o',
			},
			country: 'Россия',
			brand: 'Элегансио',
			width: 15000,
			height: 15000,
			weight: 500,
			count: 0,
		},
		{
			article: 2147483647,
			id: 154,
			name: 'Флоренция',
			price: 7864,
			image:
				'https://ofs.proninteam.ru/media/6_Pm46ief.png',
			category: {
				name: 'string',
				slug: '_kENYGHjOmUXBOPW3ZPBaQ31fMrm4EOcX3P9RXq5snUF6XE52o',
			},
			country: 'Россия',
			brand: 'Элегансио',
			width: 15000,
			height: 15000,
			weight: 500,
			count: 12345,
		},
		{
			article: 2147483647,
			name: 'Корбен',
			id: 152,
			price: 12356,
			image:
				'https://ofs.proninteam.ru/media/9_GbrkA6p.png',
			category: {
				name: 'string',
				slug: '_kENYGHjOmUXBOPW3ZPBaQ31fMrm4EOcX3P9RXq5snUF6XE52o',
			},
			country: 'Россия',
			brand: 'Элегансио',
			width: 15000,
			height: 15000,
			weight: 500,
			count: 12345,
		},
		{
			article: 2147483647,
			name: 'Ренессанс',
			price: 1200,
			image:
				'https://ofs.proninteam.ru/media/3_sGrbFxd.png',
			category: {
				name: 'string',
				slug: '_kENYGHjOmUXBOPW3ZPBaQ31fMrm4EOcX3P9RXq5snUF6XE52o',
			},
			id: 15265,
			country: 'Россия',
			brand: 'Элегансио',
			width: 15000,
			height: 15000,
			weight: 500,
			count: 12345,
		},
		{
			article: 2147483647,
			name: 'Престиж 2',
			price: 6700,
			id: 15262,
			image:
				'https://ofs.proninteam.ru/media/2_ulWu6gg.png',
			category: {
				name: 'string',
				slug: '_kENYGHjOmUXBOPW3ZPBaQ31fMrm4EOcX3P9RXq5snUF6XE52o',
			},
			country: 'Россия',
			brand: 'Элегансио',
			width: 15000,
			height: 15000,
			weight: 500,
			count: 12345,
		},
		{
			article: 2147483647,
			id: 15261,
			name: 'Авантио',
			price: 9900,
			image:
				'https://ofs.proninteam.ru/media/6_lHxFdi0.png',
			category: {
				name: 'string',
				slug: '_kENYGHjOmUXBOPW3ZPBaQ31fMrm4EOcX3P9RXq5snUF6XE52o',
			},
			country: 'Россия',
			brand: 'Элегансио',
			width: 15000,
			height: 15000,
			weight: 500,
			count: 12345,
		},
	];
	return (
		<section className={styles.section}>
			<Title titleText="Избранное" />
			<ul className={styles.cardList}>
				{items?.map((item) => (
					<li className={styles.card} key={uuidv4()}>
						<ProductCard
							title={item.name}
							oldPrice={item.price.toLocaleString()}
							newPrice={item.price.toLocaleString()}
							weight={item.weight}
							brand={item.brand}
							country={item.country}
							img={item.image}
							inStock={item.count}
							id={item.id}
							isSmall
						/>
					</li>
				))}
			</ul>
		</section>
	);
}

export default Favorites;
