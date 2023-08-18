import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	allProducts: [],
	loading: true,
	error: null,
	popularProducts: [],
	discountProducts: [],
	fastDeliveryProducts: [],
	collections: [],
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

export const fetchPopularProducts = createAsyncThunk(
	`${sliceName}/fetchPopularProducts`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getPopularProducts();
			return fulfillWithValue([...data]);
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const fetchCollections = createAsyncThunk(
	`${sliceName}/fetchCollections`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getCollections();
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
				state.discountProducts = action.payload.filter((item) => item.discount);
				state.fastDeliveryProducts = action.payload.filter(
					(item) => item.fast_delivery,
				);
				state.loading = false;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(fetchPopularProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchPopularProducts.fulfilled, (state, action) => {
				state.popularProducts = action.payload;
				state.loading = false;
			})
			.addCase(fetchPopularProducts.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(fetchCollections.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCollections.fulfilled, (state, action) => {
				state.collections = action.payload;
				state.loading = false;
			})
			.addCase(fetchCollections.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const selectProducts = (state) => state[sliceName];
export default productSlice.reducer;
