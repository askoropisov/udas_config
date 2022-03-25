import { createSlice } from "@reduxjs/toolkit"
import { getSpectrum } from "../../API/configuration/Spectrum"

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
        builder.addCase(getSpectrum.fulfilled, (state, action) => {
            const data = action.payload
            console.log(data)
            state.alphaL = data.alpha.left
            state.alphaR = data.alpha.right
            state.betaL = data.beta.left
            state.betaR = data.beta.right
            state.alphaBetaL=data.alphaBeta.left
            state.alphabetaR=data.alphaBeta.right
        })
        builder.addCase(getSpectrum.rejected, (state, action) =>{
            console.log(action)
        })
    }
})

export const { setSpectrum } = SpectrumSlice.actions

export default SpectrumSlice.reducer;