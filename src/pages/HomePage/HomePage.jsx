import styles from './HomePage.module.css';
import Intro from '../../components/Sections/Main/Intro/Intro';

function HomePage() {
	return (
		<main className={styles.container}>
			<Intro />
		</main>
	);
}

export default HomePage;
