import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0
}


export const sayacSlice = createSlice({
    name: 'sayac',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        empty: (state) => {
            state.value = 0;
        },
        incrementByValue : (state, action) => {
            state.value = state.value  + action.payload;
        }
    }
})

export const { increment, decrement, empty, incrementByValue } = sayacSlice.actions
export default sayacSlice.reducer