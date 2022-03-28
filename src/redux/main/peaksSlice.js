import { createSlice } from "@reduxjs/toolkit"
import { getPeaks, setPeaks } from "../../API/main/peaks"

const init = {
    peak81: 100,
    peak356: 504
}

export const peaksSlice = createSlice({
    name: "main/peaks",
    initialState: init,
    reducers: {
        setPeak81: (state, action) => {
            state.peak81 = action.payload
        },
        setPeak356: (state, action) => {
            state.peak356 = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase (setPeaks.fulfilled, (state, action)=> {
            state.isOpen = action.payload
        })
        builder.addCase(setPeaks.rejected, (state, action) => {
            console.log(action)
        })
        builder.addCase(getPeaks.fulfilled, (state, action)=>{
            const data = action.payload
            console.log(data)
            state.peak356 = data.peak356
            state.peak81 = data.peak81
        })
        builder.addCase(getPeaks.rejected, (state, action) =>{
            console.log(action)
        })
    }
})

export const {
    setPeak81,
    setPeak356 } = peaksSlice.actions

export default peaksSlice.reducer;