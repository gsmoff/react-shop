import { createSlice } from "@reduxjs/toolkit";

type LikeProductsState = {
    [id: number]:boolean
}

export const initialState:LikeProductsState = {
    1: true,
    2: true,
}

export const likeSlise = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike: (state,action) => ({
            ...state,
            [action.payload]:true
        }),
        removeLike: (state,action) => ({
            ...state,
            [action.payload]:false
        })
    }
})
export const { addLike, removeLike } = likeSlise.actions

export default likeSlise.reducer