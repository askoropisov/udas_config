import { createSlice } from "@reduxjs/toolkit"
import { setCoefGrad } from "../../../API/flowMeter/graduation"

const init = {
    K: 40, 
    t: 0, 
    V1a: 3,
    V1b: 7
}


export const graduationSlice = createSlice({
    name: "flowmeter/graduation",
    initialState: init,
    reducers: {
        setCoefK: (state, action) => {
            state.K = action.payload
        },
        setCoeft: (state, action) => {
            state.t = action.payload
        },
        setCoefV1a: (state, action) => {
            state.V1a = action.payload
        },
        setCoefV1b: (state, action) => {
            state.V1b = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setCoefGrad.fulfilled, (state, action) => {
            state.isOpen = action.payload
        })
        builder.addCase(setCoefGrad.rejected, (state, action) => {
            console.log(action)
        })
    }
})

export const {
    setCoefK,
    setCoeft,
    setCoefV1a,
    setCoefV1b } = graduationSlice.actions;

export default graduationSlice.reducer;