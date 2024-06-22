import { createSlice } from '@reduxjs/toolkit';

export const userProfilSlice = createSlice({
    name: 'userProfil',
    initialState: {
        profil: null
    },
    reducers: {
        update: (state, action) => {
            state.profil = action.payload
        }
    }
});

// this is for dispatch
export const { update } = userProfilSlice.actions;

// this is for configureStore
export default userProfilSlice.reducer;