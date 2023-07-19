import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage } from '../../pages';
import CartPage from '../../pages/CartPage/CartPage';
import ConsentDataProcessing from '../../pages/ConsentDataProcessing/ConsentDataProcessing';
import DataProcessingPolicy from '../../pages/DataProcessingPolicy/DataProcessingPolicy';
import OrderPage from '../../pages/OrderPage/OrderPage';
import OrderingForm from '../../pages/OrderingForm/OrderingForm';
import PageInDevelopment from '../../pages/PageInDevelopment/PageInDevelopment';
import TradingRules from '../../pages/TradingRules/TradingRules';
import UserAccount from '../../pages/UserAccount/UserAccount';
import { getCart } from '../../store/cart/cart-slice';
import { closeModal } from '../../store/modal/modal-slice';
import {
	fetchCollections,
	fetchPopularProducts,
	fetchProducts,
} from '../../store/products/products-slice';
import { modals } from '../../utils/modals';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import Modal from '../Modals/Modal/Modal';
import Footer from '../Sections/Footer/Footer';
import Header from '../Sections/Header/Header';
import { UserOrders } from '../UserOrders/UserOrders';
import styles from './App.module.css';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchPopularProducts());
		dispatch(fetchCollections());
		dispatch(getCart());
	}, [dispatch]);

	const { modalOpen, currentModal } = useSelector((state) => state.modal);

	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Header />
				<main id="main" className={styles.app__main}>
					<Breadcrumbs />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route
							path="/user"
							element={
								<UserAccount>
									<div />
								</UserAccount>
							}
						/>
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
						<Route
							path="/user/my_orders"
							element={
								<UserAccount>
									<UserOrders />
								</UserAccount>
							}
						/>
						<Route path="/order" element={<OrderPage />} />
					</Routes>
				</main>
				<Footer />
				<Modal open={modalOpen} onClose={() => dispatch(closeModal())}>
					{modals[currentModal]}
				</Modal>
			</BrowserRouter>
		</div>
	);
}

export default App;
