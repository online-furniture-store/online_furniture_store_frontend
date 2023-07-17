import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productReducer from './products/products-slice';
import cartReducer from './cart/cart-slice';
import furnitureReducer from './furniture/furniture-slice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    furniture: furnitureReducer,
},
  middleware: [thunk],
});

export default store;
