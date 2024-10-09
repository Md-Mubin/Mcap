import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: false,
    },
    reducers: {
        toggleNav: (state) => {
            state.value = !state.value
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleNav } = counterSlice.actions

export default counterSlice.reducer