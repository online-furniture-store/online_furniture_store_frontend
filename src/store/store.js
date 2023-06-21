import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { commonSlice } from './slices/commonSlice';

const store = configureStore({
  reducer: commonSlice,
  middleware: [thunk],
});
export default store;
