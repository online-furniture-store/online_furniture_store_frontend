import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	loading: true,
	error: null,
	orders: [],
	order: {},
};

export const sliceName = 'orders';

export const makeOrder = createAsyncThunk(
	`${sliceName}/makeOrder`,
	async (data, { fulfillWithValue, rejectWithValue }) => {
		try {
			const order = await api.makeNewOrder(data);
			return fulfillWithValue({ ...order });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const fetchOrder = createAsyncThunk(
	`${sliceName}/fetchOrder`,
	async (id, { fulfillWithValue, rejectWithValue }) => {
		try {
			const orders = await api.getOrder(id);
			return fulfillWithValue({ ...orders });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const getOrders = createAsyncThunk(
	`${sliceName}/getOrders`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const orders = await api.getUserOrders();
			return fulfillWithValue(orders);
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
				state.order = action.payload;
				state.loading = false;
			})
			.addCase(makeOrder.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(getOrders.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getOrders.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.orders = action.payload.map((item) => {
					const date = new Date(item.delivery.datetime_to);
					item.delivery.datetime_to = date.toLocaleDateString();
					return item;
				});
			})
			.addCase(getOrders.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})

			.addCase(fetchOrder.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchOrder.fulfilled, (state, action) => {
				state.loading = false;
				state.order = action.payload;
				const date = new Date(action.payload.delivery.datetime_from);
				action.payload.delivery.datetime_from = date.toLocaleDateString();
			})
			.addCase(fetchOrder.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const selectOrders = (state) => state[sliceName];
export default ordersSlice.reducer;
