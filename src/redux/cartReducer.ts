import { omit } from 'lodash';
import { count } from 'console';
// import { initialState } from './likeReducer';
import { createSlice } from '@reduxjs/toolkit';

type ProductsInCartState = {
    [id: number]: number;
}

export const initialState:ProductsInCartState = {
    // 1: 1,
    // 2: 1,
    // 3: 1
}

export const cartSlice = createSlice({
    name: "productsInCart",
    initialState,
    reducers: {
        addProductToCart: (prevState, action) => ({
            ...prevState,
            [action.payload.id]:(prevState[action.payload.id] || 0) + action.payload.count
        }),
        removeProductFromCart: (prevState, action) => omit(prevState, action.payload),
        //     {
        // let prevRemoveProductFromCart = { ...prevState };
        // delete prevRemoveProductFromCart[action.payload];
        // return prevRemoveProductFromCart;
        // }
        changeProductQuantity: (prevState,action) =>({
            ...prevState,
            [action.payload.id]: action.payload.count
        })
    }
})

export const {removeProductFromCart, addProductToCart,changeProductQuantity} = cartSlice.actions

export default cartSlice.reducer 