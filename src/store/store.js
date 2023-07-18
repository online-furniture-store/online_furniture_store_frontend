import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import modalReducer from './modal/modal-slice';
import productReducer from './products/products-slice';
import cartReducer from './cart/cart-slice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    products: productReducer,
    cart: cartReducer,
},
  middleware: [thunk],
});

export default store;
