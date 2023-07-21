import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	loading: true,
	error: null,
	orders: [],
};

const sliceName = 'orderSlice';

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

const orderSlice = createSlice({
	name: sliceName,
	initialState,
	extraReducers: (builder) => {
		builder
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
			});
	},
});

export default orderSlice.reducer;
