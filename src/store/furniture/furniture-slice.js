import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
  furniture: {},
  loading: true,
  error: null,
};

export const sliceName = 'furniture';

export const fetchProduct = createAsyncThunk(
  `${sliceName}/fetchProduct`,
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      const furniture = await api.getProduct(id);
      return fulfillWithValue({ ...furniture });
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const furnitureSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.furniture = action.payload;
        state.loading = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default furnitureSlice.reducer;
