import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage } from '../../pages';
import styles from './App.module.css';
import Header from '../Header/Header/Header';
import Footer from '../Sections/Footer/Footer';

function App() {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/user" />
						<Route path="/chosen" />
						<Route path="/cart" />
						<Route path="/arm-chairs" />
						<Route path="/tables" />
						<Route path="/wardrobes" />
						<Route path="/sofas" />
						<Route path="/sale" />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>

		</div>
	);
}

export default App;
