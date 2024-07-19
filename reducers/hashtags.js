import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hashtagsSlice = createSlice({
	name: 'hashtags',
	initialState,
	reducers: {
		addHashtag: (state, action) => {
			state.value.push({
				hashtag: action.payload,
				count: 1,
			})
		},
		incrementHashtag: (state, action) => {
			state.value[action.payload].count ++;
		},
		deleteHashtag: (state, action) => {
			state.value.splice(action.payload, 1);
		},
		decrementHashtag: (state, action) => {
			state.value[action.payload].count --;
		}
	},
});

export const { addHashtag, deleteHashtag, incrementHashtag, decrementHashtag } = hashtagsSlice.actions;
export default hashtagsSlice.reducer;
