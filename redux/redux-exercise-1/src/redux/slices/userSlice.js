

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: []
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = action.payload;
            const existingUser = state.users.find(user => user.id === newUser.id)
            if (!existingUser) {
                state.users.push(newUser)
            }
            
        }
    }
});

export const userActions = userSlice.actions

export default userSlice.reducer