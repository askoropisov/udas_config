import { createSlice } from "@reduxjs/toolkit"
import { getAllMain } from "../../API/main/generalMain"
import { setPeaks } from "../../API/main/peaks"

const init = {
    Peak81: 100,
    Peak356: 504
}

export const peaksSlice = createSlice({
    name: "main/peaks",
    initialState: init,
    reducers: {
        setPeak81: (state, action) => {
            state.Peak81 = action.payload
        },
        setPeak356: (state, action) => {
            state.Peak356 = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase (setPeaks.fulfilled, (state, action)=> {
            state.isOpen = action.payload
        })
        builder.addCase(setPeaks.rejected, (state, action) => {
            console.log(action)
        })
        builder.addCase(getAllMain.fulfilled, (state, action) =>{
            const data = action.payload
            console.log(data)
            state.Peak356 = data.eScaleModel.peak356
            state.Peak81 = data.eScaleModel.peak81
        })
        builder.addCase(getAllMain.rejected, (state, action) => {
            console.log(action)
    })
    }
})

export const {
    setPeak81,
    setPeak356 } = peaksSlice.actions

export default peaksSlice.reducer;