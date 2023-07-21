import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import modalReducer from './modal/modal-slice';
import productReducer from './products/products-slice';
import cartReducer from './cart/cart-slice';
import furnitureReducer from './furniture/furniture-slice';
import authSlice from './auth/auth-slice';
import ordersSlice from './orders/orders-slice';
import registrationReducer from './registration/registration-slice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    products: productReducer,
    cart: cartReducer,
    furniture: furnitureReducer,
    auth: authSlice,
    orders: ordersSlice,
    registration: registrationReducer,

},
  middleware: [thunk],
});

export default store;
