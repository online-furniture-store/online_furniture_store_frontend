import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	orders: [],
	loading: true,
	error: null,
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
				state.orders = action.payload;
				state.loading = false;
			})
			.addCase(makeOrder.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export default ordersSlice.reducer;
