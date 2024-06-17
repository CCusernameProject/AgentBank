import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: ""
    },
    reducers: {
        update: (state, action) => {
            state.token = action.payload
        }
    }
});

// this is for dispatch
export const { update } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;