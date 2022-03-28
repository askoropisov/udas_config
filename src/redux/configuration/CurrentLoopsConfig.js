import { createSlice } from "@reduxjs/toolkit";
import { setIsOpenLoopsAsync } from "../../API/configuration/currentLoops";
import { getAllConfiguration } from "../../API/configuration/generalConfiguration";

const init = {
    isOpenLoops: false
}

export const currentLoopsSlice = createSlice({
    name: "configuration/currentloops",
    initialState: init,
    reducers: {
        setIsOpenLoops: (state, action) => {
            state.isOpenLoops = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setIsOpenLoopsAsync.fulfilled, (state, action) => {
            state.isOpenLoops = action.payload
        })
        builder.addCase(setIsOpenLoopsAsync.rejected, (state, action) => {
            console.log(action)
        })
        builder.addCase(getAllConfiguration.fulfilled, (state, action) => {
            state.isOpenLoops = action.payload
        })
        builder.addCase(getAllConfiguration.rejected, (state, action) => {
            console.log(action)
        })
    }
})

export const { setIsOpenLoops } = currentLoopsSlice.actions

export default currentLoopsSlice.reducer;