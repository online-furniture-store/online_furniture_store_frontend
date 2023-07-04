import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
	fetchProducts,
	fetchPopularProducts,
	fetchCollections,
} from '../../store/products/products-slice';
import { getCart } from '../../store/cart/cart-slice';
import { HomePage, AboutPage } from '../../pages';
import styles from './App.module.css';
import Header from '../Sections/Header/Header';
import Footer from '../Sections/Footer/Footer';
import CartPage from '../../pages/CartPage/CartPage';
import TradingRules from '../../pages/TradingRules/TradingRules';
import PageInDevelopment from '../../pages/PageInDevelopment/PageInDevelopment';
import ConsentDataProcessing from '../../pages/ConsentDataProcessing/ConsentDataProcessing';
import DataProcessingPolicy from '../../pages/DataProcessingPolicy/DataProcessingPolicy';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchPopularProducts());
		dispatch(fetchCollections());
		dispatch(getCart());
	}, [dispatch]);

	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Header />
				<main id="main" className={styles.app__main}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/user" />
						<Route path="/chosen" />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/arm-chairs" />
						<Route path="/tables" />
						<Route path="/wardrobes" />
						<Route path="/sofas" />
						<Route path="/sale" />
						<Route path="/rules-sale" element={<TradingRules />} />
						<Route path="/under-construction" element={<PageInDevelopment />} />
						<Route path="/rules-consent" element={<ConsentDataProcessing />} />
						<Route path="/rules-data" element={<DataProcessingPolicy />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
