import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productReducer from './products/products-slice';

const store = configureStore({
  reducer: {
    products: productReducer,
},
  middleware: [thunk],
});

export default store;
