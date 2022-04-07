import { createSlice } from "@reduxjs/toolkit";
import { setIsOpenFlapAsync } from "../../../API/flowMeter/flap";
import { getAllFlowMeter } from "../../../API/flowMeter/generalFlowMeter";

const init = {
    isOpen: false
}

export const flapSlice = createSlice({
    name: "flowmeter/flap",
    initialState: init,
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setIsOpenFlapAsync.fulfilled, (state, action) => {
            state.isOpen = action.payload
        })
        builder.addCase(setIsOpenFlapAsync.rejected, (state, action) => {
            console.log(action)
        })
        builder.addCase(getAllFlowMeter.fulfilled, (state, action) =>{
            const data = action.payload
            state.isOpen=data.flapModel.status;
        })
        builder.addCase(getAllFlowMeter.rejected, (state, action) =>{
            console.log(action)
        })
    }
})

export const { setIsOpen } = flapSlice.actions

export default flapSlice.reducer;


