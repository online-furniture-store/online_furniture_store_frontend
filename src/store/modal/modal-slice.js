import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	modalOpen: false,
	currentModal: '',
};

export const sliceName = 'modal';

const modalSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.modalOpen = true;
			state.currentModal = action.payload;
		},

		closeModal: (state) => {
			state.modalOpen = false;
			state.currentModal = '';
		},
	},
});

export const selectModal = (state) => state[sliceName];
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
