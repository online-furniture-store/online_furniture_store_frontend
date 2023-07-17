import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage } from '../../pages';
import OrderPage from '../../pages/OrderPage/OrderPage';
import CartPage from '../../pages/CartPage/CartPage';
import ConsentDataProcessing from '../../pages/ConsentDataProcessing/ConsentDataProcessing';
import DataProcessingPolicy from '../../pages/DataProcessingPolicy/DataProcessingPolicy';
import PageInDevelopment from '../../pages/PageInDevelopment/PageInDevelopment';
import TradingRules from '../../pages/TradingRules/TradingRules';
import OrderingForm from '../../pages/OrderingForm/OrderingForm';
import FavouritesPage from '../../pages/FavouritesPage/FavouritesPage';
import { getCart } from '../../store/cart/cart-slice';
import {
	fetchCollections,
	fetchPopularProducts,
	fetchProducts,
} from '../../store/products/products-slice';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import Footer from '../Sections/Footer/Footer';
import Header from '../Sections/Header/Header';
import styles from './App.module.css';

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
					<Breadcrumbs />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/user" element={<PageInDevelopment />} />
						<Route path="/chosen" element={<PageInDevelopment />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/arm-chairs" element={<PageInDevelopment />} />
						<Route path="/tables" element={<PageInDevelopment />} />
						<Route path="/wardrobes" element={<PageInDevelopment />} />
						<Route path="/sofas" element={<PageInDevelopment />} />
						<Route path="/sale" element={<PageInDevelopment />} />
						<Route path="/rules-sale" element={<TradingRules />} />
						<Route path="/under-construction" element={<PageInDevelopment />} />
						<Route path="/rules-consent" element={<ConsentDataProcessing />} />
						<Route path="/rules-data" element={<DataProcessingPolicy />} />
						<Route path="/order-form" element={<OrderingForm />} />
						<Route path="/order" element={<OrderPage />} />
						<Route path="/favourites" element={<FavouritesPage />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
