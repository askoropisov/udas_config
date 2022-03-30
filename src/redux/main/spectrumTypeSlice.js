import { createSlice } from "@reduxjs/toolkit"
import { getAllMain } from "../../API/main/generalMain"
import { getTypeBack, getTypePrimary, getTypeRef } from "../../API/main/spectrumType"

const init = {
    graph: (new Array(100).fill(1).map(data => {
                return ({
                    Activity: (Math.random() * 10).toFixed(0),
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
            state.graph=data.mass;
        })
        builder.addCase(getAllMain.rejected, (state, action) =>{
            console.log(action)
            })
    }
})

export default spectrumType.reducer;