import styles from './HomePage.module.css';
import Intro from '../../components/Sections/Main/Intro/Intro';
import Categories from '../../components/Sections/Main/Categories/Categories';

function HomePage() {
	return (
		<main className={styles.container}>
			<Intro />
			<Categories />
		</main>
	);
}

export default HomePage;
