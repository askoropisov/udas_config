import { createSlice } from "@reduxjs/toolkit"
import { getTypeBack, getTypePrimary, getTypeRef } from "../../API/main/spectrumType"

const init = {
    graph: (new Array(5000).fill(1).map(data => {
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
        builder.addCase(getTypePrimary.fulfilled, (state, action)=>{
            const data = action.payload
            console.log(data)
            state.graph=data;
        })
        builder.addCase(getTypeBack.fulfilled, (state, action)=>{
            const data = action.payload
            console.log(data)
            state.graph=data;
        })
        builder.addCase(getTypeRef.fulfilled, (state, action)=>{
            const data = action.payload
            console.log(data)
            state.graph=data;
        })

        builder.addCase(getTypePrimary.rejected, (state, action) =>{
            console.log(action)
        })
        builder.addCase(getTypeBack.rejected, (state, action) =>{
            console.log(action)
        })
        builder.addCase(getTypeRef.rejected, (state, action) =>{
            console.log(action)
        })
    }
})

export default spectrumType.reducer;