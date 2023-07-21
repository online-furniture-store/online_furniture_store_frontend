import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './auth/auth-slice';
import cartReducer from './cart/cart-slice';
import furnitureReducer from './furniture/furniture-slice';
import modalReducer from './modal/modal-slice';
import ordersReducer from './orders/orders-slice';
import productsReducer from './products/products-slice';
import registrationReducer from './registration/registration-slice';

const store = configureStore({
	reducer: {
		modal: modalReducer,
		products: productsReducer,
		cart: cartReducer,
		furniture: furnitureReducer,
		auth: authReducer,
		registration: registrationReducer,
		orders: ordersReducer,
	},
	middleware: [thunk],
});

export default store;
