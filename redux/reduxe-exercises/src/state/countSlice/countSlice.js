import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}


export const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.fulfilled, (state, action) => {
            state.count += action.payload;
        })
    }
});

export const incrementAsync = createAsyncThunk(
    'count/incrementAsync',
    async (amount) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;