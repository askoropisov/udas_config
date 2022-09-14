import { createSlice } from "@reduxjs/toolkit"
import { getAllMain } from "../../API/main/generalMain"
import { setCompliance, setPeaks, setRefAsync } from "../../API/main/peaks"

const init = {
    Peak81: 100,
    Peak356: 504,
    Path: "uuu",
    Type: 0,
    Reference: "rrr",
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
        },
        setType: (state, action) => {
            state.Type = action.payload
        },
        setPath: (state, action) => {
            state.Path = action.payload
        },
        setRefSpec: (state, action) => {
            state.Reference = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase (setPeaks.fulfilled, (state, action)=> {
            state.isOpen = action.payload
        })
        builder.addCase(setPeaks.rejected, (state, action) => {
            console.log(action)
        })
        builder.addCase (setCompliance.fulfilled, (state, action) => {
            state.isOpen = action.payload
        })
        builder.addCase(setCompliance.rejected, (state, action) => {
            console.log(action)
        })
        builder.addCase(setRefAsync.rejected, (state, action) => {
            console.log(action)
        })
        builder.addCase(getAllMain.fulfilled, (state, action) =>{
            const data = action.payload
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
    setPeak356,
    setPath,
    setType,
    setRefSpec } = peaksSlice.actions

export default peaksSlice.reducer;