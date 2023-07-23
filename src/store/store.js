import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import modalReducer from './modal/modal-slice';
import productReducer from './products/products-slice';
import cartReducer from './cart/cart-slice';
import furnitureReducer from './furniture/furniture-slice';
import authReducer from './auth/auth-slice';
import userReducer from './user/user-slice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    products: productReducer,
    cart: cartReducer,
    furniture: furnitureReducer,
    auth: authReducer,
    user: userReducer,
},
  middleware: [thunk],
});

export default store;
