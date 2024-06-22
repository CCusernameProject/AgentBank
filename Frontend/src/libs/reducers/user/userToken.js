import { createSlice } from '@reduxjs/toolkit';

export const userTokenSlice = createSlice({
    name: 'userToken',
    initialState: {
        token: ""
    },
    reducers: {
        updateToken: (state, action) => {
            state.token = action.payload
        }
    }
});

// this is for dispatch
export const { updateToken } = userTokenSlice.actions;

// this is for configureStore
export default userTokenSlice.reducer;