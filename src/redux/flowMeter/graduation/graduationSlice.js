import { createSlice } from "@reduxjs/toolkit"
import { getPolynom, setCoefGrad } from "../../../API/flowMeter/graduation"

const init = {
    K: 0, 
    t: '00:01:00', 
    V1a: 0,
    V1b: 0,
    polynom: 0
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
        builder.addCase(getPolynom.fulfilled, (state, action) => {
            const data = action.payload
            console.log(data)
            state.polynom=data
        })
        builder.addCase(getPolynom.rejected, (state, action) =>{
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