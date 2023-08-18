import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';
import {
	setLocalData,
	removeLocalData,
	getLocalData,
} from '../../utils/localStorage';
import { fetchUser } from '../user/user-slice';

const initialState = {
	isAuth: false,
	loading: true,
	error: null,
};

export const sliceName = 'auth';

export const login = createAsyncThunk(
	`${sliceName}/login`,
	async (data, { fulfillWithValue, rejectWithValue, dispatch }) => {
		try {
			const tokens = await api.jwtCreate(data);
			setLocalData('refresh', tokens.refresh);
			setLocalData('access', tokens.access);
			dispatch(fetchUser());
			return fulfillWithValue();
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const updateToken = createAsyncThunk(
	`${sliceName}/updateToken`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			await api.jwtVerify({ token: getLocalData('access') });
			return fulfillWithValue();
		} catch (err) {
			if (err.code === 'token_not_valid') {
				try {
					const token = await api.jwtRefresh({
						refresh: getLocalData('refresh'),
					});
					setLocalData('access', token.access);
					return fulfillWithValue();
				} catch (refreshErr) {
					return rejectWithValue(refreshErr);
				}
			}
			return rejectWithValue(err);
		}
	},
);

const authSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		logout: (state) => {
			state.isAuth = false;
			removeLocalData('refresh');
			removeLocalData('access');
		},
	},
	extraReducers: (builder) => {
		builder

			.addCase(login.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state) => {
				state.isAuth = true;
				state.loading = false;
			})
			.addCase(login.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(updateToken.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateToken.fulfilled, (state) => {
				state.isAuth = true;
				state.loading = false;
			})
			.addCase(updateToken.rejected, (state, action) => {
				state.error = action.payload;
				state.isAuth = false;
				state.loading = false;
			});
	},
});

export const selectAuth = (state) => state[sliceName];
export const { logout } = authSlice.actions;
export default authSlice.reducer;
