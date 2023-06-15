import styles from './HomePage.module.css';
import Intro from '../../components/Sections/Main/Intro/Intro';
import PopularProducts from '../../components/Sections/Main/PopularProducts/PopularProducts';
import Categories from '../../components/Sections/Main/Categories/Categories';

function HomePage() {
	return (
		<main className={styles.container}>
			<Intro />
	    <Categories />
			<PopularProducts />
		</main>
	);
}

export default HomePage;
