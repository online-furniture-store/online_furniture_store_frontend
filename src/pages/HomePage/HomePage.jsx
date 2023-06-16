import styles from './HomePage.module.css';
import Intro from '../../components/Sections/Main/Intro/Intro';
import Categories from '../../components/Sections/Main/Categories/Categories';
import Services from '../../components/Sections/Main/Services/Services';
import Bargain from '../../components/Sections/Main/Bargain/Bargain';

function HomePage() {
	return (
		<main className={styles.container}>
			<Intro />
			<Categories />
			<Bargain />
			<Services />
		</main>
	);
}

export default HomePage;
