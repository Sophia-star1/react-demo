import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
        addNumtoCount: (state, action) => {
            state.count += action.payload
        }
    }
})

// 导出actionCreator
export const { increment, decrement, addNumtoCount } = counterSlice.actions

// 默认导出reducer
export default counterSlice.reducer