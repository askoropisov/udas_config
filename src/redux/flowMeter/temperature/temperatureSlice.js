import { createSlice } from "@reduxjs/toolkit";
import { getTemperature } from "../../../API/flowMeter/temperature";

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
        builder.addCase(getTemperature.fulfilled, (state, action)=>{
            const data = action.payload
            console.log(data);
            state.temperature=data.temperature;
        })
        builder.addCase(getTemperature.rejected, (state, action) =>{
            console.log(action)
        })

    }
})

export const { setTemperature } = temperatureSlice.actions

export default temperatureSlice.reducer;
