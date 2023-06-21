import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    increment: () => {
    },
  },
});
