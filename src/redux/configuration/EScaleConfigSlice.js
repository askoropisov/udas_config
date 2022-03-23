import { createSlice } from "@reduxjs/toolkit"

const init = {
    Peak356: 0,
    Peak81: 0,
    Range: 0,
    Duration: 0,
    S0: 2,
    S1: 1.2,
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

    }
})

export const { setEScale } = EScaleSlice.actions

export default EScaleSlice.reducer;