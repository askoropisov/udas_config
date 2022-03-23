import { createSlice } from "@reduxjs/toolkit";

const init = {
    temperature: 27.5
}

export const temperatureSlice = createSlice({
    name: "flowmeter/temperature",
    initialState: init,
    reducers: {
        setTemperature: (state, action) => {
            state.temperature = action.payload
        }
    },
    extraReducers: (builder) => {

    }
})

export const { setTemperature } = temperatureSlice.actions

export default temperatureSlice.reducer;
