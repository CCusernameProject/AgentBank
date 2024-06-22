import { createSlice } from '@reduxjs/toolkit';

export const userTokenSlice = createSlice({
    name: 'userToken',
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
export const { update } = userTokenSlice.actions;

// this is for configureStore
export default userTokenSlice.reducer;