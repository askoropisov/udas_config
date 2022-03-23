import { createSlice } from "@reduxjs/toolkit"
import { setCoefFlowMeter } from "../../../API/flowMeter/flowMeterSensor"


const init = {
    FM_A: 1,
    FM_B: 2,
    FM_C: 3,
    FM_D: 4,
    value: 0,
    flow: 0
}

export const flowMeterSlice = createSlice({
    name: "flowmeter/flow",
    initialState: init,
    reducers: {
        setFlowA: (state, action) => {
            state.FM_A = action.payload
        },
        setFlowB: (state, action) => {
            state.FM_B = action.payload
        },
        setFlowC: (state, action) => {
            state.FM_C = action.payload
        },
        setFlowD: (state, action) => {
            state.FM_D = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setCoefFlowMeter.fulfilled, (state, action) => {
            state.isOpen = action.payload
        })
        builder.addCase(setCoefFlowMeter.rejected, (state, action) => {
            console.log(action)
        })
    }
})

export const {
    setFlowA,
    setFlowB,
    setFlowC,
    setFlowD } = flowMeterSlice.actions

export default flowMeterSlice.reducer;