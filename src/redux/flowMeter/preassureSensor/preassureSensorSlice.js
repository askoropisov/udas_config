import { createSlice } from "@reduxjs/toolkit"
import { getAllFlowMeter } from "../../../API/flowMeter/generalFlowMeter"
import { setCoefPreassureMeter } from "../../../API/flowMeter/preassureSensor"

const init = {
    PS_A: 10,
    PS_B: 9,
    PS_C: 8,
    PS_D: 7,
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
        builder.addCase(getAllFlowMeter.fulfilled, (state, action)=>{
            const data = action.payload
            console.log(data)
            state.PS_A = data.pressuareSensorModel.polynom.a
            state.PS_B = data.pressuareSensorModel.polynom.b
            state.PS_C = data.pressuareSensorModel.polynom.c 
            state.PS_D = data.pressuareSensorModel.polynom.d
            state.preassure=data.pressuareSensorModel.preassure
            state.value=data.pressuareSensorModel.value
        })
        builder.addCase(getAllFlowMeter.rejected, (state, action) =>{
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