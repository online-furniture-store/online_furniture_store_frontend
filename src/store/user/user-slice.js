import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	user: {},
	loading: true,
	error: null,
};

export const sliceName = 'user';

export const fetchUser = createAsyncThunk(
	`${sliceName}/fetchUser`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const user = await api.getUser();
			return fulfillWithValue({ ...user });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const registration = createAsyncThunk(
	`${sliceName}/registration`,
	async (data, { fulfillWithValue, rejectWithValue }) => {
		try {
			const user = await api.createUser(data);
			return fulfillWithValue({ ...user });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const forgotPassword = createAsyncThunk(
	`${sliceName}/forgotPassword`,
	async (data, { fulfillWithValue, rejectWithValue }) => {
		try {
			await api.resetPassword(data);
			return fulfillWithValue();
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const patchUser = createAsyncThunk(
	`${sliceName}/patchUser`,
	async (data, { fulfillWithValue, rejectWithValue }) => {
		try {
			const user = await api.patchUser(data);
			return fulfillWithValue({ ...user });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const changePassword = createAsyncThunk(
	`${sliceName}/changePassword`,
	async (data, { fulfillWithValue, rejectWithValue }) => {
		try {
			await api.changePassword(data);
			return fulfillWithValue({});
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

const userSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder

			.addCase(fetchUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.loading = false;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(registration.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(registration.fulfilled, (state, action) => {
				state.user = action.payload;
				state.loading = false;
			})
			.addCase(registration.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(forgotPassword.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(forgotPassword.fulfilled, (state) => {
				state.loading = false;
			})
			.addCase(forgotPassword.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(patchUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(patchUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.loading = false;
			})
			.addCase(patchUser.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(changePassword.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(changePassword.fulfilled, (state) => {
				state.loading = false;
			})
			.addCase(changePassword.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const selectUser = (state) => state[sliceName];
export default userSlice.reducer;
