import { createSlice } from "@reduxjs/toolkit"
import { getAllMain } from "../../API/main/generalMain"
import { getTypePrimary } from "../../API/main/spectrumType"

const init = {
    primary: (new Array(100).fill(1).map((data, index) => {
                return ({
                    Activity: index,
                    Count: (Math.random() * 1000).toFixed(0)
                })
    })),
    back: (new Array(100).fill(1).map((data, index) => {
        return ({
            Activity: index,
            Count: (Math.random() * 1000).toFixed(0)
        })
    })),
    ref: (new Array(100).fill(1).map((data, index) => {
        return ({
            Activity: index,
            Count: (Math.random() * 1000).toFixed(0)
        })
    })),
}


export const spectrumType = createSlice({
    name: "main/spectrumType",
    initialState: init,
    reducers: {
        setType: (state, action) =>{
            state.graph = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllMain.fulfilled, (state, action)=>{
            const data = action.payload
            console.log(data)
            state.primary=data.primary;
            state.back=data.back;
            state.ref=data.reference;
        })
        builder.addCase(getAllMain.rejected, (state, action) =>{
            console.log(action)
        })
        builder.addCase(getTypePrimary.fulfilled, (state, action) => {
            const data = action.payload
            state.primary = data
        })
    }
})

export default spectrumType.reducer;