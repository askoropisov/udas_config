import { createSlice } from "@reduxjs/toolkit"
import { getSpectrometers } from "../../API/configuration/Spectrometers"

const init = {
    primaryPort:1400,
    backPort:1912,
    primaryA: 19.1,
    primaryB: 0,
    primaryRn: 12,
    backA: 12.1123,
    backB: 54,
    backRn: 3.1,
}

export const SpectrometersSlice = createSlice({
    name: "configuration/spectrometers",
    initialState: init,
    reducers: {
        setSpectrometers: (state, action) => {
            state.Spectrometers = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSpectrometers.fulfilled, (state, action) => {
            const data = action.payload
            console.log(data)
            state.primaryPort=data.primary.port
            state.backPort=data.background.port
            state.primaryA=data.primary.deadTime.alpha
            state.primaryB=data.primary.deadTime.beta
            state.primaryRn=data.primary.deadTime.rn
            state.backA=data.background.deadTime.alpha
            state.backB=data.background.deadTime.beta
            state.backRn=data.background.deadTime.rn
        })
        builder.addCase(getSpectrometers.rejected, (state, action) =>{
            console.log(action)
        })

    }
})

export const { setSpectrometers } = SpectrometersSlice.actions

export default SpectrometersSlice.reducer;