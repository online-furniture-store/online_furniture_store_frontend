import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authSlice from './auth/auth-slice';
import cartReducer from './cart/cart-slice';
import furnitureReducer from './furniture/furniture-slice';
import modalReducer from './modal/modal-slice';
import ordersSlice from './orders/orders-slice';
import productReducer from './products/products-slice';

const store = configureStore({
	reducer: {
		modal: modalReducer,
		products: productReducer,
		cart: cartReducer,
		furniture: furnitureReducer,
		auth: authSlice,
		orders: ordersSlice,
	},
	middleware: [thunk],
});

export default store;
