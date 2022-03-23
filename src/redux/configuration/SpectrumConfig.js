import { createSlice } from "@reduxjs/toolkit"

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

    }
})

export const { setSpectrum } = SpectrumSlice.actions

export default SpectrumSlice.reducer;