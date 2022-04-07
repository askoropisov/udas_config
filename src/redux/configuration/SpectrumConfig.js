import { createSlice } from "@reduxjs/toolkit"
import { getAllConfiguration } from "../../API/configuration/generalConfiguration"

const init = {
    alphaR: 12,
    alphaL: 3,
    betaR: 3,
    betaL: 0,
    alphabetaR: 34,
    alphaBetaL: 10,
}

export const SpectrumSlice = createSlice({
    name: "configuration/spectrum",
    initialState: init,
    reducers: {
        setSpectrum: (state, action) => {
            state.Spectrum = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllConfiguration.fulfilled, (state, action) => {
            const data = action.payload
            state.alphaL = data.spectrumConfigModel.alpha.left
            state.alphaR = data.spectrumConfigModel.alpha.right
            state.betaL = data.spectrumConfigModel.beta.left
            state.betaR = data.spectrumConfigModel.beta.right
            state.alphaBetaL=data.spectrumConfigModel.alphaBeta.left
            state.alphabetaR=data.spectrumConfigModel.alphaBeta.right
        })
        builder.addCase(getAllConfiguration.rejected, (state, action) =>{
            console.log(action)
        })
    }
})

export const { setSpectrum } = SpectrumSlice.actions

export default SpectrumSlice.reducer;