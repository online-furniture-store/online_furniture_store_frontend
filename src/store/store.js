import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './auth/auth-slice';
import cartReducer from './cart/cart-slice';
import furnitureReducer from './furniture/furniture-slice';
import modalSlice from './modal/modal-slice';
import ordersSlice from './orders/orders-slice';
import productsSlice from './products/products-slice';
import registrationReducer from './registration/registration-slice';

const store = configureStore({
	reducer: {
		modal: modalSlice,
		products: productsSlice,
		cart: cartReducer,
		furniture: furnitureReducer,
		auth: authReducer,
		registration: registrationReducer,
		orders: ordersSlice,
	},
	middleware: [thunk],
});

export default store;
