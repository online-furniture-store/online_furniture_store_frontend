import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	allProducts: [],
	loading: false,
	error: null,
};

export const sliceName = 'products';

export const fetchProducts = createAsyncThunk(
	`${sliceName}/fetchProducts`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getAllProducts();
			return fulfillWithValue([...data]);
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

const productSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.allProducts = action.payload;
				state.loading = false;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export default productSlice.reducer;
