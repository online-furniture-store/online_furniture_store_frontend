import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	orders: {},
	loading: true,
	error: null,
};

export const sliceName = 'orders';

export const getOrders = createAsyncThunk(
	`${sliceName}/getOrders`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const cart = await api.getCart();
			return fulfillWithValue({ ...cart });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const makeOrder = createAsyncThunk(
	`${sliceName}/makeOrder`,
	async ({ user, products, delivery, paid }, { fulfillWithValue, rejectWithValue }) => {
		try {
			const cart = await api.makeOrder(user, products, delivery, paid);
			return fulfillWithValue({ ...cart });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

const ordersSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(makeOrder.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(makeOrder.fulfilled, (state, action) => {
				state.cart = action.payload;
				state.loading = false;
			})
			.addCase(makeOrder.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export default ordersSlice.reducer;
