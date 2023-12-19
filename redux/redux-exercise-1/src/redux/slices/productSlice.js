
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const initialState = {
    products: [],
    status: 'idle',
    error: null
}

export const getProductsFromFirebase = createAsyncThunk('products/getProductsFromFirebase', async () => {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map(doc => doc.data())
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(getProductsFromFirebase.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const loadedProducts = action.payload;
                loadedProducts.map(product => {
                    state.products.push(product)
                })
            })
    }
})

export const productActions = productSlice.actions;
export const selectAllProducts = (state) => state.products;

export default productSlice.reducer;