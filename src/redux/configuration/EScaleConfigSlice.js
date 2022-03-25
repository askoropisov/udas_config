import { createSlice } from "@reduxjs/toolkit"
import { getEscale } from "../../API/configuration/Escale"

const init = {
    Peak356: 0,
    Peak81: 0,
    Range: 0,
    Duration: {
        hours: "00",
        minutes: "00",
        seconds: "00"
    },
    S0: 0,
    S1: 0.5,
    S2: 0
}

export const EScaleSlice = createSlice({
    name: "configuration/escale",
    initialState: init,
    reducers: {
        setEScale: (state, action) => {
            state.EScale = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getEscale.fulfilled, (state, action) => {
            const data = action.payload
            console.log(data)
            state.Peak356 = data.peak356
            state.Peak81 = data.peak81
            state.Range = data.range
            state.Duration = data.duration
            state.S0 = data.s0
            state.S1 = data.s1
            state.S2 = data.s2
        })
        builder.addCase(getEscale.rejected, (state, action) => {
            console.log(action)
        })

    }
})

export const { setEScale } = EScaleSlice.actions

export default EScaleSlice.reducer;