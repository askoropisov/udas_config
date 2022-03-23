import { createSlice } from "@reduxjs/toolkit";
import { setIsOpenFlapAsync } from "../../../API/flowMeter/flap";

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
    }
})

export const { setIsOpen } = flapSlice.actions

export default flapSlice.reducer;


