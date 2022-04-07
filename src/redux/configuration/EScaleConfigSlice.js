import { createSlice } from "@reduxjs/toolkit"
import { getAllConfiguration } from "../../API/configuration/generalConfiguration"

const init = {
    Peak356: 0,
    Peak81: 0,
    Range: 0,
    // Duration: {
    //     hours: "00",
    //     minuts: "00",
    //     seconds: "00"
    // },
    S0: 0,
    S1: 0.5,
    S2: 0
}

export const EScaleConfigSlice = createSlice({
    name: "configuration/escale",
    initialState: init,
    reducers: {
        setEScale: (state, action) => {
            state.EScale = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllConfiguration.fulfilled, (state, action) => {
            const data = action.payload
            state.Peak356 = data.eScaleModel.peak356
            state.Peak81 = data.eScaleModel.peak81
            state.Range = data.eScaleModel.range
            //state.Duration = data.eScaleModel.duration
            state.S0 = data.eScaleModel.s0
            state.S1 = data.eScaleModel.s1
            state.S2 = data.eScaleModel.s2
        })
        builder.addCase(getAllConfiguration.rejected, (state, action) => {
                console.log(action)
        })
    }
})

export const { setEScale } = EScaleConfigSlice.actions

export default EScaleConfigSlice.reducer;