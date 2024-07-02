import { createSlice } from "@reduxjs/toolkit";

// 正常定义一个slice
const channelSlice = createSlice({
    name:'channel',
    initialState:{
        channels:[]
    },
    reducers:{
        setChanells:(state,action)=>{
            state.channels = action.payload
        }
    }
})


// 导出actionCreator
export const { setChanells } = channelSlice.actions

// 默认导出reducer
export default channelSlice.reducer

// 定义一个函数，内部返回的时一个异步函数，处理获取后端操作，使用dispatch来触发action
export const fetchChannels = () => async (dispatch) => {
    const res = await fetch('http://localhost:3001/channels')
    const data = await res.json()
    dispatch(setChanells(data))
}