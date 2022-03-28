import { createSlice } from "@reduxjs/toolkit"
import { setCoefFlowMeter } from "../../../API/flowMeter/flowMeterSensor"
import { getAllFlowMeter } from "../../../API/flowMeter/generalFlowMeter"


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
        builder.addCase(getAllFlowMeter.fulfilled, (state, action)=>{
            const data = action.payload
            console.log(data)
            state.FM_A = data.flowMeterSensorModel.polynom.a
            state.FM_B = data.flowMeterSensorModel.polynom.b
            state.FM_C = data.flowMeterSensorModel.polynom.c 
            state.FM_D = data.flowMeterSensorModel.polynom.d
            state.flow = data.flowMeterSensorModel.flow
            state.value = data.flowMeterSensorModel.value
        })
        builder.addCase(getAllFlowMeter.rejected, (state, action) =>{
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