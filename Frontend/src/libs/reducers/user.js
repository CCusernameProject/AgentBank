import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: "User",
        lastName: " disconnected",
        token: ""
    },
    reducers: {
        update: (state, action) => {
            state.username = action.payload
            state.token = action.payload
            console.log(action)
        }
    }
});

// this is for dispatch
export const { update } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;