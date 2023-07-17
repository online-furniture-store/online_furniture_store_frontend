import { v4 as uuidv4 } from 'uuid';
import styles from './Favourites.module.css';
import ProductCard from '../../ProductCard/ProductCard';
import Title from '../../UI/Title/Title';

function Favourites() {
	const items = [
		{
			article: 2147483647,
      id: 15267444,
			name: 'Диван',
			price: 999,
			image:
				'https://img3.akspic.ru/previews/6/4/4/1/7/171446/171446-verholaz-chudo_chelovek_pauk_majl_morales-chelovek_pauk-majlz_morales-komiksy_marvel-500x.jpg',
			category: {
				name: 'string',
				slug: '_kENYGHjOmUXBOPW3ZPBaQ31fMrm4EOcX3P9RXq5snUF6XE52o',
			},
			country: 'string',
			brand: 'string',
			width: 15000,
			height: 15000,
			weight: 500,
      count: 0,
		},
    {
			article: 2147483647,
      id: 154,
			name: 'Диван',
			price: 999,
			image:
				'https://img3.akspic.ru/previews/6/4/4/1/7/171446/171446-verholaz-chudo_chelovek_pauk_majl_morales-chelovek_pauk-majlz_morales-komiksy_marvel-500x.jpg',
			category: {
				name: 'string',
				slug: '_kENYGHjOmUXBOPW3ZPBaQ31fMrm4EOcX3P9RXq5snUF6XE52o',
			},
			country: 'string',
			brand: 'string',
			width: 15000,
			height: 15000,
			weight: 500,
      count: 12345,
		},
    {
			article: 2147483647,
			name: 'Диван',
      id: 152,
			price: 999,
			image:
				'https://img3.akspic.ru/previews/6/4/4/1/7/171446/171446-verholaz-chudo_chelovek_pauk_majl_morales-chelovek_pauk-majlz_morales-komiksy_marvel-500x.jpg',
			category: {
				name: 'string',
				slug: '_kENYGHjOmUXBOPW3ZPBaQ31fMrm4EOcX3P9RXq5snUF6XE52o',
			},
			country: 'string',
			brand: 'string',
			width: 15000,
			height: 15000,
			weight: 500,
      count: 12345,
		},
    {
			article: 2147483647,
			name: 'Диван',
			price: 999,
			image:
				'https://img3.akspic.ru/previews/6/4/4/1/7/171446/171446-verholaz-chudo_chelovek_pauk_majl_morales-chelovek_pauk-majlz_morales-komiksy_marvel-500x.jpg',
			category: {
				name: 'string',
				slug: '_kENYGHjOmUXBOPW3ZPBaQ31fMrm4EOcX3P9RXq5snUF6XE52o',
			},
      id: 15265,
			country: 'string',
			brand: 'string',
			width: 15000,
			height: 15000,
			weight: 500,
      count: 12345,
		},
    {
			article: 2147483647,
			name: 'Диван',
			price: 999,
      id: 15262,
			image:
				'https://img3.akspic.ru/previews/6/4/4/1/7/171446/171446-verholaz-chudo_chelovek_pauk_majl_morales-chelovek_pauk-majlz_morales-komiksy_marvel-500x.jpg',
			category: {
				name: 'string',
				slug: '_kENYGHjOmUXBOPW3ZPBaQ31fMrm4EOcX3P9RXq5snUF6XE52o',
			},
			country: 'string',
			brand: 'string',
			width: 15000,
			height: 15000,
			weight: 500,
      count: 12345,
		},
    {
			article: 2147483647,
      id: 15261,
			name: 'Диван',
			price: 999,
			image:
				'https://img3.akspic.ru/previews/6/4/4/1/7/171446/171446-verholaz-chudo_chelovek_pauk_majl_morales-chelovek_pauk-majlz_morales-komiksy_marvel-500x.jpg',
			category: {
				name: 'string',
				slug: '_kENYGHjOmUXBOPW3ZPBaQ31fMrm4EOcX3P9RXq5snUF6XE52o',
			},
			country: 'string',
			brand: 'string',
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
							oldPrice={item.price}
              newPrice={item.price}
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

export default Favourites;
