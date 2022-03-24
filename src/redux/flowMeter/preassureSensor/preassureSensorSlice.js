import { createSlice } from "@reduxjs/toolkit"
import { setCoefPreassureMeter } from "../../../API/flowMeter/preassureSensor"

const init = {
    PS_A: -5,
    PS_B: 2,
    PS_C: 10,
    PS_D: 39,
    value: 55,
    preassure: 140
}

export const preassureSlice = createSlice({
    name: "flowmeter/preassure",
    initialState: init,
    reducers: {
        setPreassureA: (state, action) => {
            state.PS_A = action.payload
        },
        setPreassureB: (state, action) => {
            state.PS_B = action.payload
        },
        setPreassureC: (state, action) => {
            state.PS_C = action.payload
        },
        setPreassureD: (state, action) => {
            state.PS_D = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setCoefPreassureMeter.fulfilled, (state, action) => {
            state.isOpen = action.payload
        })
        builder.addCase(setCoefPreassureMeter.rejected, (state, action) => {
            console.log(action)
        })
    }
})

export const {
    setPreassureA,
    setPreassureB,
    setPreassureC,
    setPreassureD } = preassureSlice.actions;

    export default preassureSlice.reducer;