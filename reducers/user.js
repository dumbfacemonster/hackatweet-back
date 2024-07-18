import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: {
		name: null,
        username: null,
        token: null,
    },
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.value.username = action.payload.username;
            state.value.token = action.payload.token;
			state.value.name = action.payload.name;
		},
        removeUser: (state) => {
            state.value = {};
        }
	},
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
