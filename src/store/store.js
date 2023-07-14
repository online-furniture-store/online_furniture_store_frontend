import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productReducer from './products/products-slice';
import cartReducer from './cart/cart-slice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
},
  middleware: [thunk],
});

export default store;
