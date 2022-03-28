import { createSlice } from "@reduxjs/toolkit"
import { getAllConfiguration } from "../../API/configuration/generalConfiguration"

const init = {
    primaryPort: 1400,
    backPort: 1912,
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
        builder.addCase(getAllConfiguration.fulfilled, (state, action) => {
            const data = action.payload
            console.log(data)
            state.primaryPort=data.spectrometersConfigModel.primary.port
            state.backPort=data.spectrometersConfigModel.background.port
            state.primaryA=data.spectrometersConfigModel.primary.deadTime.alpha
            state.primaryB=data.spectrometersConfigModel.primary.deadTime.beta
            state.primaryRn=data.spectrometersConfigModel.primary.deadTime.rn
            state.backA=data.spectrometersConfigModel.background.deadTime.alpha
            state.backB=data.spectrometersConfigModel.background.deadTime.beta
            state.backRn=data.spectrometersConfigModel.background.deadTime.rn
        })
        builder.addCase(getAllConfiguration.rejected, (state, action) =>{
            console.log(action)
        })

    }
})

export const { setSpectrometers } = SpectrometersSlice.actions

export default SpectrometersSlice.reducer;