import { createSlice } from "@reduxjs/toolkit"

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

    }
})

export const { setSpectrometers } = SpectrometersSlice.actions

export default SpectrometersSlice.reducer;