import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { selectProducts: number[] } = {
    selectProducts: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        selectProduct: (state, action: PayloadAction<number>) => {
            state.selectProducts.push(action.payload)
        },
        unselectProduct: (state, action: PayloadAction<number>) => {
            state.selectProducts = state.selectProducts.filter(id => id !== action.payload)
        }
    }
})

export const { selectProduct, unselectProduct } = productSlice.actions
export default productSlice.reducer