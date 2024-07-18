import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hashtagsSlice = createSlice({
	name: 'hashtags',
	initialState,
	reducers: {
		addHashtag: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { addHashtag } = hashtagsSlice.actions;
export default hashtagsSlice.reducer;
