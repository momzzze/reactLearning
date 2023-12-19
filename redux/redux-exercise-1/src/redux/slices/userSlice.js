

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const initialState = {
    users: [],
    status: 'idle',
}

export const fetchUsersFromFirebase = createAsyncThunk('users/fetchUsersFromFirebase', async () => {
    const usersRef = collection(db, 'users');
    const snapshot = await getDocs(usersRef)
    return snapshot.docs.map(doc => doc.data());
})


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsersFromFirebase.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const loadedUsers = action.payload;
            loadedUsers.map(user => {
                state.users.push(user)
            })
        })
    }
});

export const userActions = userSlice.actions
export const selectAllUsers = (state) => state.users;

export default userSlice.reducer