import { createSlice } from "@reduxjs/toolkit"
import { getCoefFlowMeter, setCoefFlowMeter } from "../../../API/flowMeter/flowMeterSensor"


const init = {
    FM_A: 1,
    FM_B: 2,
    FM_C: 3,
    FM_D: 4,
    value: 11,
    flow: 4
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
        builder.addCase(getCoefFlowMeter.fulfilled, (state, action)=>{
            const data = action.payload
            console.log(data)
            state.FM_A = data.polynom.a
            state.FM_D = data.polynom.b
            state.FM_C = data.polynom.c 
            state.FM_D = data.polynom.d
            state.flow=data.flow
            state.value=data.value
        })
        builder.addCase(getCoefFlowMeter.rejected, (state, action) =>{
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