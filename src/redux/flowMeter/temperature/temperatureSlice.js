import { createSlice } from "@reduxjs/toolkit";
import { getAllFlowMeter } from "../../../API/flowMeter/generalFlowMeter";

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
        builder.addCase(getAllFlowMeter.fulfilled, (state, action)=>{
            const data = action.payload
            console.log(data);
            state.temperature = data.temperatureSensorModel.temperature;
        })
        builder.addCase(getAllFlowMeter.rejected, (state, action) =>{
            console.log(action)
        })
    }
})

export const { setTemperature } = temperatureSlice.actions

export default temperatureSlice.reducer;
