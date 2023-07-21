import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import modalReducer from './modal/modal-slice';
import productReducer from './products/products-slice';
import cartReducer from './cart/cart-slice';
import furnitureReducer from './furniture/furniture-slice';
import authReducer from './auth/auth-slice';
import ordersReducer from './orders/orders-slice';
import registrationReducer from './registration/registration-slice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    products: productReducer,
    cart: cartReducer,
    furniture: furnitureReducer,
    auth: authReducer,
    orders: ordersReducer,
    registration: registrationReducer,

},
  middleware: [thunk],
});

export default store;
