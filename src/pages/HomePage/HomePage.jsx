import styles from './HomePage.module.css';
import Intro from '../../components/Sections/Main/Intro/Intro';
import PopularProducts from '../../components/Sections/Main/PopularProducts/PopularProducts';

function HomePage() {
	return (
		<main className={styles.container}>
			<Intro />
			<PopularProducts />
		</main>
	);
}

export default HomePage;
